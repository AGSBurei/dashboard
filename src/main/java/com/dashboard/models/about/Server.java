package com.dashboard.models.about;

import com.dashboard.models.Service;
import com.dashboard.models.services.socialmediastats.SocialMediaStatsService;
import com.dashboard.models.services.weather.WeatherService;

import java.util.Date;
import java.util.List;

public class Server {
    private List<Service> services = new java.util.ArrayList<>();;
    private long current_time;

    public Server() {
        WeatherService weatherService = new WeatherService();
        SocialMediaStatsService socialMediaStatsService = new SocialMediaStatsService();
        this.services.add(weatherService);
        this.services.add(socialMediaStatsService);
        Date date = new Date();
        this.current_time = date.getTime();


    }


    public List<Service> getServices() {
        return services;
    }

    public void setServices(List<Service> services) {
        this.services = services;
    }


    public long getCurrentTime() {
        return current_time;
    }

    public void setCurrentTime(long current_time) {
        this.current_time = current_time;
    }

}
