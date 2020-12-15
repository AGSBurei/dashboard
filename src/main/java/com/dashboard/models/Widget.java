package com.dashboard.models;

import com.dashboard.models.services.Param;

import java.util.*;

public class Widget {
    private String name;
    private String description;
    private Map<String, String> params = new HashMap<>();

    public Widget() {
        this.name = "widgetName";
        this.description = "widgetDescription";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Map<String, String> getParams() {
        return params;
    }

    public void setParams(Map<String, String> params) {
        this.params = params;
    }

    public void replaceParam(String key, String value) {
        this.params.replace(key, value);
    }
}
