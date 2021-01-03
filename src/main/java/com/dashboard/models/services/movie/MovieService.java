package com.dashboard.models.services.movie;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;
import com.dashboard.models.services.pokemon.PokemonSearchWidget;

import java.util.ArrayList;
import java.util.List;

public class MovieService extends Service {
    public MovieService() {
        this.setName("movie");
        List<Widget> widgets = new ArrayList<>();

        PokemonSearchWidget pokemonSearchWidget = new PokemonSearchWidget();
        widgets.add(pokemonSearchWidget);
        this.setWidgets(widgets);
    }
}
