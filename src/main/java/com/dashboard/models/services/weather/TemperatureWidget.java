package com.dashboard.models.services.weather;

import com.dashboard.models.Widget;
import com.dashboard.models.services.Param;

import java.util.ArrayList;
import java.util.List;

public class TemperatureWidget extends Widget {
    public TemperatureWidget() {
        this.setName("city_temperature");
        this.setDescription("Display temperature for a city.");

        List<Param<?>> paramList = new ArrayList<>();
        Param<String> ville = new Param<>("city", "String");

        paramList.add(ville);

        this.setParams(paramList);
    }
}
