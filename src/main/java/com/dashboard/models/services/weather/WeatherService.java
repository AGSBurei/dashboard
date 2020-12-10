package com.dashboard.models.services.weather;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;


import java.util.ArrayList;
import java.util.List;

public class WeatherService extends Service {
    public WeatherService() {
        this.setName("weather");
        List<Widget> widgets = new ArrayList<>();
        TemperatureWidget weatherWidget = new TemperatureWidget();
        widgets.add(weatherWidget);
        this.setWidgets(widgets);
    }
}
