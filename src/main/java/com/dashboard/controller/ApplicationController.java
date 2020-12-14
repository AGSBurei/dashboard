package com.dashboard.controller;

import com.dashboard.payload.response.AboutResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class ApplicationController {

    @GetMapping("/about")
    public ResponseEntity<?> allAccess(HttpServletRequest request) {
        return ResponseEntity.ok(
                new AboutResponse(request.getRemoteAddr())
        );
    }

    @GetMapping("/verify")
    public void verifier(HttpServletRequest request) {
//      Stockage des info de l'URL dans une variable
        Map<String, String> values = getQueryMap(request.getQueryString());
//      Récupération du user
        System.out.println("User : "+ values.get("user"));
//      Récupération du token
        System.out.println("Token : "+values.get("token"));


    }

//  fonction pour récupérer les info de la queryString
    public static Map<String, String> getQueryMap(String query) {
        String[] params = query.split("&");
        Map<String, String> map = new HashMap<String, String>();
        for (String param : params) {
            String[] p = param.split("=");
            String name = p[0];
            if (p.length > 1) {
                String value = p[1];
                map.put(name, value);
            }
        }
        return map;

    }

}
