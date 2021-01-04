package com.dashboard.models.services.news;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;
import com.dashboard.models.services.pokemon.PokemonSearchWidget;

import java.util.ArrayList;
import java.util.List;

public class NewsService extends Service {
    public NewsService() {
        this.setName("news");
        List<Widget> widgets = new ArrayList<>();

        NewsWidget newsWidget = new NewsWidget();
        widgets.add(newsWidget);
        this.setWidgets(widgets);
    }
}
