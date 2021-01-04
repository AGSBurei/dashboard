package com.dashboard.models.services.news;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class NewsWidget extends Widget {
    public NewsWidget() {
        this.setName("news");
        this.setDescription("see news by search query.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("query", "String");

        this.setParams(paramList);
    }
}
