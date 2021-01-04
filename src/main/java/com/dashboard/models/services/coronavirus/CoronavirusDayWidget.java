package com.dashboard.models.services.coronavirus;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class CoronavirusDayWidget extends Widget {
    public CoronavirusDayWidget() {
        this.setName("coronavirus_day");
        this.setDescription("display covid cases this day in a country.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("country", "String");

        this.setParams(paramList);
    }
}
