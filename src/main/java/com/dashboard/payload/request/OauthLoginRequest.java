package com.dashboard.payload.request;

import javax.validation.constraints.NotBlank;

public class OauthLoginRequest {


    @NotBlank
    private String idTokenString;


    public String getIdTokenString() {
        return idTokenString;
    }

    public void setIdTokenString(String idTokenString) {
        this.idTokenString = idTokenString;
    }
}
