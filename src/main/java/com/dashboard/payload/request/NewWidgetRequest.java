package com.dashboard.payload.request;

import com.dashboard.models.Widget;
import com.dashboard.models.services.Param;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class NewWidgetRequest {

    private String name;
    private Map<String, String> params = new HashMap<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, String> getParams() {
        return params;
    }

    public void setParams(Map<String, String> params) {
        this.params = params;
    }
}