package com.dashboard.models;

import com.dashboard.models.services.Param;

import java.util.ArrayList;
import java.util.List;

public class Widget {
    private String name;
    private String description;
    private List<Param<?>> params = new ArrayList<>();

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

    public List<Param<?>> getParams() {
        return params;
    }

    public void setParams(List<Param<?>> params) {
        this.params = params;
    }
}
