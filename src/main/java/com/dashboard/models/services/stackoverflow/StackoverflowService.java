package com.dashboard.models.services.stackoverflow;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;
import com.dashboard.models.services.pokemon.PokemonSearchWidget;

import java.util.ArrayList;
import java.util.List;

public class StackoverflowService extends Service {
    public StackoverflowService() {
        this.setName("stackoverflow");
        List<Widget> widgets = new ArrayList<>();

        StackoverflowQuestionWidget stackoverflowQuestionWidget = new StackoverflowQuestionWidget();
        widgets.add(stackoverflowQuestionWidget);
        this.setWidgets(widgets);
    }
}
