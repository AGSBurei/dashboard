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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<String> pokemon() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null){
            System.out.println(authentication.getName());
            User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + authentication.getName()));
            // modifier les paramètres du widget de l'utilisateur
            // Il faut obtenir l'ID du widget

            PokemonSearchWidget pokemonSearchWidget = new PokemonSearchWidget("pokemon","description");
            pokemonSearchWidget.replaceParam("pokemon", "ditto");
//            widgetRepository.save(pokemonSearchWidget);
//            user.addWidget(pokemonSearchWidget);
//            userRepository.save(user);
            System.out.println(user.getWidgets().get(0).getName());

        }
        try {
            HttpResponse<JsonNode> jsonResponse = Unirest
                    .get("https://pokeapi.co/api/v2/pokemon/ditto")
                    .header("accept", "application/json")
                    .asJson();

            // Ici enlever les données qui nous interresse pas si jamais il y a besoin
            return ResponseEntity.ok(jsonResponse.getBody().toString());
        } catch (UnirestException e) {
            System.out.println("unirest exception:" + e);
        }
        return null;
    }


    // Problème:  remplir une classe avec les infos + add widget + remove widget
}
