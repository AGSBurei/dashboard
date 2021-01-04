package com.dashboard.models.services.coronavirus;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;
import com.dashboard.models.services.pokemon.PokemonSearchWidget;

import java.util.ArrayList;
import java.util.List;

public class CoronavirusService extends Service {
    public CoronavirusService() {
        this.setName("coronavirus");
        List<Widget> widgets = new ArrayList<>();

        CoronavirusDayWidget coronavirusDayWidget = new CoronavirusDayWidget();
        CoronavirusTotalWidget coronavirusTotalWidget = new CoronavirusTotalWidget();
        widgets.add(coronavirusDayWidget);
        widgets.add(coronavirusTotalWidget);
        this.setWidgets(widgets);
    }
}
