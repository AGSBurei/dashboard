package com.dashboard.models.services.football;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class FootballLastMatchWidget extends Widget {
    public FootballLastMatchWidget() {
        this.setName("football_last_france");
        this.setDescription("display last matchs in France.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("competition", "String");

        this.setParams(paramList);
    }
}
