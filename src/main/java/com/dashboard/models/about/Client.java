package com.dashboard.models.about;

public class Client {
    private String host;

    public Client(String ipAddress) {
        this.host = ipAddress;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }
}
