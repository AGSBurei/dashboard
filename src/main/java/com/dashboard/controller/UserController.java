package com.dashboard.controller;

import com.dashboard.models.User;
import com.dashboard.models.Widget;
import com.dashboard.payload.request.NewWidgetRequest;
import com.dashboard.payload.request.SaveWidgetRequest;
import com.dashboard.repository.UserRepository;
import com.dashboard.repository.WidgetRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    WidgetRepository widgetRepository;

    @GetMapping("/widgets")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> pokemon() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + authentication.getName()));
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                String response = objectMapper.writeValueAsString(user.getWidgets());
                return ResponseEntity.ok(response);
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        return null;
    }


    @PostMapping("/widgets")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> saveWidgets(@Valid @RequestBody SaveWidgetRequest saveWidgetRequest) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + authentication.getName()));
            ObjectMapper objectMapper = new ObjectMapper();

            String response = objectMapper.writeValueAsString(saveWidgetRequest.getWidgets());
//            List<Widget> widgets = Arrays.asList(objectMapper.readValue(response, Widget.class));

            user.setWidgets(saveWidgetRequest.getWidgets());
            userRepository.save(user);

            System.out.println(response);
            return ResponseEntity.ok(response);
        }
        return null;
    }

    @PostMapping("/widgets/new")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> newWidget(@Valid @RequestBody NewWidgetRequest newWidgetRequest) throws JsonProcessingException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + authentication.getName()));

            Widget newWidget = new Widget();
            newWidget.setName(newWidgetRequest.getName());
            newWidget.setParams(newWidgetRequest.getParams());
            widgetRepository.save(newWidget);

            user.addWidget(newWidget);
            userRepository.save(user);

            ObjectMapper objectMapper = new ObjectMapper();
            String newWidgetJSON = objectMapper.writeValueAsString(newWidget);

            return ResponseEntity.ok(newWidgetJSON);
        }
        return null;
    }


    @PostMapping("/widgets/delete")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> deleteWidget(@Valid @RequestBody Widget widget) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + authentication.getName()));
            Widget widgetToDelete = widgetRepository.findById(widget.getId()).orElseThrow(() -> new Exception("Widget not found"));

            Widget userWidgetToDelete = null;
            List<Widget> userWidgets = user.getWidgets();
            for (Widget userWidget : userWidgets) {
                if (userWidget.getId().equals(widget.getId())) {
                    userWidgetToDelete = userWidget;
                }
            }
            user.removeWidgets(userWidgetToDelete);

            widgetRepository.delete(widgetToDelete);
            userRepository.save(user);

            return ResponseEntity.ok("ok");
        }
        return null;
    }

    @PostMapping("/widget")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> saveWidget(@Valid @RequestBody Widget widget) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            Widget widgetToSave = widgetRepository.findById(widget.getId()).orElseThrow(() -> new Exception("Widget not found"));
            widgetToSave.setParams(widget.getParams());
            widgetRepository.save(widgetToSave);

            return ResponseEntity.ok("ok");
        }
        return null;
    }
}
