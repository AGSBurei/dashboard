package com.dashboard.models.about;

import com.dashboard.models.Service;
import com.dashboard.models.services.pokemon.PokemonService;
import com.dashboard.models.services.socialmediastats.SocialMediaStatsService;
import com.dashboard.models.services.socialmediastats.TwitterStatsWidget;
import com.dashboard.models.services.twitter.TwitterService;
import com.dashboard.models.services.weather.WeatherService;

import java.util.Date;
import java.util.List;

public class Server {
    private List<Service> services = new java.util.ArrayList<>();;
    private long current_time;

    public Server() {
        WeatherService weatherService = new WeatherService();
        SocialMediaStatsService socialMediaStatsService = new SocialMediaStatsService();
        PokemonService pokemonService = new PokemonService();
        TwitterService twitterService = new TwitterService();
        MovieService movieService = new MovieService();
        FootballService footballService = new FootballService();
        StackOverflowService stackOverflowService = new StackOverflowService();
        NewsService newsService = new NewsService();
        CoronaVirusService coronaVirusService = new CoronaVirusService();
        this.services.add(weatherService);
        this.services.add(socialMediaStatsService);
        this.services.add(pokemonService);
        this.services.add(twitterService);
        this.services.add(movieService);
        this.services.add(footballService);
        this.services.add(stackOverflowService);
        this.services.add(newsService);
        this.services.add(coronaVirusService);
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
