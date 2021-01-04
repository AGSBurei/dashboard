package com.dashboard.models.services.twitter;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class TwitterUserWidget extends Widget {
    public TwitterUserWidget() {
        this.setName("twitter_user");
        this.setDescription("search for twitter user by twitter name.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("twitterName", "String");

        this.setParams(paramList);
    }
}
