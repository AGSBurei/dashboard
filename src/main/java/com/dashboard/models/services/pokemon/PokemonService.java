package com.dashboard.models.services.pokemon;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;

import java.util.ArrayList;
import java.util.List;

public class PokemonService extends Service {
    public PokemonService() {
        this.setName("pokemon");
        List<Widget> widgets = new ArrayList<>();

        PokemonSearchWidget pokemonSearchWidget = new PokemonSearchWidget();
        widgets.add(pokemonSearchWidget);
        this.setWidgets(widgets);
    }
}
