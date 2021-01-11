package com.dashboard.models.services.steamApi;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class GetAchievementGame extends Widget{
    public GetAchievementGame(){
        this.setName("game_Achievement");
        this.setDescription("show global achievement for a specified game");

        Map<String, String> valueList = new HashMap<>();
        valueList.put("game", "String");
        this.setParams(valueList);
    }
}
