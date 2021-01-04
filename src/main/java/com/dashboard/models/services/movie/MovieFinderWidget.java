package com.dashboard.models.services.movie;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class MovieFinderWidget extends Widget {
    public MovieFinderWidget() {
        this.setName("movie_finder");
        this.setDescription("search a movie.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("name", "String");

        this.setParams(paramList);
    }
}
