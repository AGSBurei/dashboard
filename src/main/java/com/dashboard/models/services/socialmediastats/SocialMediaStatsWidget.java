package com.dashboard.models.services.socialmediastats;

import com.dashboard.models.Widget;
import com.dashboard.models.services.Param;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public abstract class SocialMediaStatsWidget extends Widget {
    public SocialMediaStatsWidget(String name, String description) {
        this.setName(name);
        this.setDescription(description);

        Map<String, String> paramList = new HashMap<>();
        paramList.put("stats_type", "String");
        paramList.put("account", "String");

        this.setParams(paramList);
    }
}
