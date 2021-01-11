package com.dashboard.models.services.steamApi;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;

import java.util.ArrayList;
import java.util.List;

public class SteamService extends Service {
    public SteamService() {
        this.setName("Steam");
        List<Widget> widgets = new ArrayList<>();
        GetNewsForApp newsForApp = new GetNewsForApp();
        GetAchievementGame achievementGame = new GetAchievementGame();
        GetAppList appList = new GetAppList();
        widgets.add(newsForApp);
        widgets.add(achievementGame);
        widgets.add(appList);
        this.setWidgets(widgets);
    }
}
