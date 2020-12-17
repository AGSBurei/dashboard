package com.dashboard.controller;

import com.dashboard.repository.UserRepository;
import com.dashboard.repository.WidgetRepository;
import com.dashboard.utils.GetQueryStrings;
import com.dashboard.utils.TwitterOauth;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/widget")
public class WidgetApiController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    WidgetRepository widgetRepository;


    @GetMapping("/twitter_search")
    public ResponseEntity<String> twitterSearch(HttpServletRequest request) {
        Map<String, String> values = GetQueryStrings.getQueryMap(request.getQueryString());

        String key = "UEImjlTJmlrI9i4ROW8NpmOig";
        String secret = "AQ9J48zWrY9JYaBi3O98yv1TTskfbwcF6ohWC1U6QmFvzUvdWl";
        String token = "812758932599017473-dV7UhmF4kEMvvQgeDtwoToaJC2qLFB6";
        String tokenSecret = "UmXHnvIWhkRfkMaSZvgfp98ajmWumHhvguoQhggJaoosS";

        TwitterOauth generator = new TwitterOauth(key, secret, token, tokenSecret);
        Map<String, String> requestParams = new HashMap<>();
        requestParams.put("q", values.get("query"));
        String header = generator.generateHeader("GET", "https://api.twitter.com/1.1/users/search.json", requestParams);

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.add("Authorization", header);
            HttpEntity<String> httpEntity = new HttpEntity<String>("body", headers);
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.exchange("https://api.twitter.com/1.1/users/search.json?q=" + values.get("query"),
                    HttpMethod.GET, httpEntity, String.class);
            return ResponseEntity.ok(Objects.requireNonNull(response.getBody()));
        } catch (RestClientException e) {
            e.printStackTrace();
        }
        return null;
    }

    @GetMapping("/pokemon")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> pokemon(@RequestParam String pokemon) {
        try {
            HttpResponse<JsonNode> jsonResponse = Unirest
                    .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
                    .header("accept", "application/json")
                    .asJson();
            return ResponseEntity.ok(jsonResponse.getBody().toString());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e.getMessage());
        }
        return null;
    }

    @GetMapping("/pokemon/list")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> pokemonList() {
        try {
            HttpResponse<JsonNode> jsonResponse = Unirest
                    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
                    .header("accept", "application/json")
                    .asJson();
            return ResponseEntity.ok(jsonResponse.getBody().toString());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e.getMessage());
        }
        return null;
    }


    @GetMapping("/stackoverflow/search")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> stackOverflowSearch(@RequestParam String search) throws
            UnsupportedEncodingException {
        try {
            HttpResponse<JsonNode> jsonResponse = Unirest
                    .get("https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=votes&intitle=" + URLEncoder.encode(search, "UTF-8") + "&site=stackoverflow")
                    .header("accept", "application/json")
                    .asJson();
            return ResponseEntity.ok(jsonResponse.getBody().toString());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e.getMessage());
        }
        return null;
    }

}