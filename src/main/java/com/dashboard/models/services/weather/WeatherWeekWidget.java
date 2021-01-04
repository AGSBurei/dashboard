package com.dashboard.models.services.weather;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class WeatherWeekWidget extends Widget {
    public WeatherWeekWidget() {
        this.setName("weather_week");
        this.setDescription("display weather for a week in a city");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("city", "String");

        this.setParams(paramList);
    }
}
