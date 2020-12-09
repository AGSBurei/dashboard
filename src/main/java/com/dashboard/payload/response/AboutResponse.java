package com.dashboard.payload.response;

import com.dashboard.models.about.Client;
import com.dashboard.models.about.Server;

public class AboutResponse {
    private Client client;
    private Server server;

    public AboutResponse(String ipAddress) {
        this.client = new Client(ipAddress);
        this.server = new Server();
    }

    public Client getClient() {
        return client;
    }

    public Server getServer() {
        return server;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void setServer(Server server) {
        this.server = server;
    }
}
