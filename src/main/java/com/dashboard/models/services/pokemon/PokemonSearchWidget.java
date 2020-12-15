package com.dashboard.models.services.pokemon;

import com.dashboard.models.Widget;
import com.dashboard.models.services.Param;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PokemonSearchWidget extends Widget {
    public PokemonSearchWidget(String name, String description) {
        this.setName(name);
        this.setDescription(description);

        Map<String, String> paramList = new HashMap<>();
        paramList.put("stats_type", "String");
        paramList.put("account", "String");

        this.setParams(paramList);
    }
}
