package com.dashboard.controller;

import com.dashboard.utils.GetQueryStrings;
import com.dashboard.utils.TwitterOauth;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.SignatureException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/widget")
public class WidgetApiController {

    @GetMapping("/twitter_search")
    public ResponseEntity<String> twitterSearch(HttpServletRequest request) {
        Map<String, String> values = GetQueryStrings.getQueryMap(request.getQueryString());

        System.out.println(values.get("query"));

        String key = "UEImjlTJmlrI9i4ROW8NpmOig";
        String secret = "AQ9J48zWrY9JYaBi3O98yv1TTskfbwcF6ohWC1U6QmFvzUvdWl";
        String token = "812758932599017473-dV7UhmF4kEMvvQgeDtwoToaJC2qLFB6";
        String tokenSecret = "UmXHnvIWhkRfkMaSZvgfp98ajmWumHhvguoQhggJaoosS";

        TwitterOauth generator = new TwitterOauth(key, secret, token, tokenSecret);
        Map<String, String> requestParams = new HashMap<>();
        requestParams.put("q",values.get("query"));
        String header = generator.generateHeader("GET", "https://api.twitter.com/1.1/users/search.json?q=", requestParams);

        try {
            HttpResponse<String> response = Unirest.get("https://api.twitter.com/1.1/users/search.json?q=")
                    .header("Authorization",header)
                    .asString();
            return ResponseEntity.ok(response.getBody());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e);
        }
        return null;
    }


    @GetMapping("/pokemon")
    public ResponseEntity<String> testApi() {
        try {
            HttpResponse<JsonNode> jsonResponse = Unirest
                    .get("https://pokeapi.co/api/v2/pokemon/ditto")
                    .header("accept", "application/json")
                    .asJson();
            return ResponseEntity.ok(jsonResponse.getBody().toString());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e);
        }

        return null;
    }


    // Problème: Obtenir l'utilisateur dans la requete + remplir une classe avec les infos
}
