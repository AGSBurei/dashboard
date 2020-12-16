package com.dashboard.models;

import com.dashboard.models.services.Param;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

@Document(collection = "widgets")
public class Widget {

    @Id
    private String id;

    private String name = "widgetName";
    private String description = "widgetDescription";
    private Map<String, String> params = new HashMap<>();

    public Widget() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
