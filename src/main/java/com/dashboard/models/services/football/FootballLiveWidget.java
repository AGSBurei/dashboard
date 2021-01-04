package com.dashboard.models.services.football;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class FootballLiveWidget extends Widget {
    public FootballLiveWidget() {
        this.setName("football_live");
        this.setDescription("display live match around the world or in a country.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("country", "String");

        this.setParams(paramList);
    }
}
