package com.dashboard.models.services.weather;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;


import java.util.ArrayList;
import java.util.List;

public class WeatherService extends Service {
    public WeatherService() {
        this.setName("weather");
        List<Widget> widgets = new ArrayList<>();
        WeatherLiveWidget weatherLiveWidget = new WeatherLiveWidget();
        WeatherWeekWidget weatherWeekWidget = new WeatherWeekWidget();
        widgets.add(weatherLiveWidget);
        widgets.add(weatherWeekWidget);
        this.setWidgets(widgets);
    }
}
