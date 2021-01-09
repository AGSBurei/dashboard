package com.dashboard.models.services.steamApi;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;

import java.util.ArrayList;
import java.util.List;

public class SteamService extends Service {
    public SteamService() {
        this.setName("Steam");
        List<Widget> widgets = new ArrayList<>();
        GetNewsForApp steamWidget = new GetNewsForApp();
        widgets.add(steamWidget);
        this.setWidgets(widgets);
    }
}
