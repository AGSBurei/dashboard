package com.dashboard.controller;

import com.dashboard.payload.response.AboutResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/")
public class ApplicationController {

    @GetMapping("/about")
    public ResponseEntity<?> allAccess(HttpServletRequest request) {
        return ResponseEntity.ok(
                new AboutResponse(request.getRemoteAddr())
        );
    }
}
