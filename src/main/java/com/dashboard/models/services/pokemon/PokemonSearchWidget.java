package com.dashboard.models.services.pokemon;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class PokemonSearchWidget extends Widget {
    public PokemonSearchWidget() {
        this.setName("pokemon_search");
        this.setDescription("search for 1st generation pokemon and get pokemon type.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("pokemon", "String");

        this.setParams(paramList);
    }
}
