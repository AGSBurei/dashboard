package com.dashboard.controller;

import com.dashboard.models.User;
import com.dashboard.models.services.pokemon.PokemonSearchWidget;
import com.dashboard.repository.UserRepository;
import com.dashboard.repository.WidgetRepository;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/widget")
public class WidgetApiController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    WidgetRepository widgetRepository;


    @GetMapping("/pokemon")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> pokemonList() {
        try {
            HttpResponse<JsonNode> jsonResponse = Unirest
                    .get("https://pokeapi.co/api/v2/pokemon/ditto")
                    .header("accept", "application/json")
                    .asJson();
            return ResponseEntity.ok(jsonResponse.getBody().toString());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e.getMessage());
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


    @GetMapping("/stackoverflow/search")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> stackOverflowSearch(@RequestParam String search) throws UnsupportedEncodingException {

        try {
            HttpResponse<JsonNode> jsonResponse = Unirest
                    .get("https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=votes&intitle="+ URLEncoder.encode(search, "UTF-8") +"&site=stackoverflow")
                    .header("accept", "application/json")
                    .asJson();
            return ResponseEntity.ok(jsonResponse.getBody().toString());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e.getMessage());
        }
        return null;
    }
}
