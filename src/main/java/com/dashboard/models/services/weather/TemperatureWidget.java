package com.dashboard.models.services.weather;

import com.dashboard.models.Widget;
import com.dashboard.models.services.Param;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TemperatureWidget extends Widget {
    public TemperatureWidget() {
        this.setName("city_temperature");
        this.setDescription("Display temperature for a city.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("city", "String");

        this.setParams(paramList);
    }
}
