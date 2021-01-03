package com.dashboard.models.services.football;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class FootballLiveWidget extends Widget {
    public FootballLiveWidget() {
        this.setName("coronavirus_day");
        this.setDescription("see covid cases this day in a country");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("country", "String");

        this.setParams(paramList);
    }
}
