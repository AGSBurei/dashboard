package com.dashboard.models.services.stackoverflow;

import com.dashboard.models.Widget;

import java.util.HashMap;
import java.util.Map;

public class StackoverflowQuestionWidget extends Widget {
    public StackoverflowQuestionWidget() {
        this.setName("stackoverflow_question");
        this.setDescription("search questions in stackoverflow.");

        Map<String, String> paramList = new HashMap<>();
        paramList.put("question", "String");

        this.setParams(paramList);
    }
}
