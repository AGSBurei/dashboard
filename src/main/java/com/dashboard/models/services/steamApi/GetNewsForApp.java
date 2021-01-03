package com.dashboard.models.services.steamApi;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class GetNewsForApp extends Widget {
    public GetNewsForApp(){
        this.setName("game_news");
        this.setDescription("show news for a specified game");

        Map<String, String> valueList = new HashMap<>();
        valueList.put("game", "String");
        this.setParams(valueList);
    }
}
