package com.dashboard.controller;

import com.dashboard.models.User;
import com.dashboard.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/widgets")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> pokemon() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null){
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

    // Problème:  remplir une classe avec les infos + add widget + remove widget
}
