package com.dashboard.models.services.movie;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class MovieFinderWidget extends Widget {
    public MovieFinderWidget() {
        this.setName("coronavirus_day");
        this.setDescription("see covid cases this day in a country");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("country", "String");

        this.setParams(paramList);
    }
}
