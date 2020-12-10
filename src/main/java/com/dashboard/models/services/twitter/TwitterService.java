package com.dashboard.models.services.twitter;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;
import com.dashboard.models.services.weather.TemperatureWidget;

import java.util.ArrayList;
import java.util.List;

public class TwitterService extends Service {
    public TwitterService() {
        this.setName("twitter");
        List<Widget> widgets = new ArrayList<>();
        TemperatureWidget weatherWidget = new TemperatureWidget();
        widgets.add(weatherWidget);
        this.setWidgets(widgets);
    }
}
