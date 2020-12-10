package com.dashboard.models.services.socialmediastats;

import com.dashboard.models.Widget;
import com.dashboard.models.services.Param;

import java.util.ArrayList;
import java.util.List;

public abstract class SocialMediaStatsWidget extends Widget {
    public SocialMediaStatsWidget(String name, String description) {
        this.setName(name);
        this.setDescription(description);

        List<Param<?>> paramList = new ArrayList<>();
        Param<String> type = new Param<>("stats_type", "String");
        Param<String> account = new Param<>("account", "String");

        paramList.add(type);
        paramList.add(account);

        this.setParams(paramList);
    }
}
