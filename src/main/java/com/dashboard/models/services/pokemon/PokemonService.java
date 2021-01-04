package com.dashboard.models.services.pokemon;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;
import com.dashboard.models.services.socialmediastats.FacebookStatsWidget;
import com.dashboard.models.services.socialmediastats.TiktokStatsWidget;
import com.dashboard.models.services.socialmediastats.TwitterStatsWidget;
import com.dashboard.models.services.socialmediastats.YoutubeStatsWidget;

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
