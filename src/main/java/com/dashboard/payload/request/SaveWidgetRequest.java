package com.dashboard.payload.request;

import com.dashboard.models.Widget;

import java.util.ArrayList;
import java.util.List;

public class SaveWidgetRequest {

    private List<Widget> widgets;

    public List<Widget> getWidgets() {
        return widgets;
    }

    public void setWidgets(List<Widget> widgets) {
        this.widgets = widgets;
    }
}