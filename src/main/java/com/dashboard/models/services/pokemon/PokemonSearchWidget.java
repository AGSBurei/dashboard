package com.dashboard.models.services.pokemon;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class PokemonSearchWidget extends Widget {
    public PokemonSearchWidget(String name, String description) {
        this.setName(name);
        this.setDescription(description);

        Map<String, String> paramList = new HashMap<>();
        paramList.put("pokemon", "String");

        this.setParams(paramList);
    }
}
