package com.dashboard.models.services.coronavirus;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class CoronavirusTotalWidget extends Widget {
    public CoronavirusTotalWidget() {
        this.setName("coronavirus_total");
        this.setDescription("display total covid case in a country.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("country", "String");

        this.setParams(paramList);
    }
}
