package com.dashboard.models.services.pokemon;

import com.dashboard.models.Service;
import com.dashboard.models.Widget;
import com.dashboard.models.services.socialmediastats.FacebookStatsWidget;
import com.dashboard.models.services.socialmediastats.TiktokStatsWidget;
import com.dashboard.models.services.socialmediastats.TwitterStatsWidget;
import com.dashboard.models.services.socialmediastats.YoutubeStatsWidget;

import java.util.ArrayList;
import java.util.List;

public class SocialMediaStatsService extends Service {
    public SocialMediaStatsService() {
        this.setName("social_media_stats");
        List<Widget> widgets = new ArrayList<>();
        TiktokStatsWidget tiktokStatsWidget = new TiktokStatsWidget();
        YoutubeStatsWidget youtubeStatsWidget = new YoutubeStatsWidget();
        FacebookStatsWidget facebookStatsWidget = new FacebookStatsWidget();
        TwitterStatsWidget twitterStatsWidget = new TwitterStatsWidget();
        widgets.add(tiktokStatsWidget);
        widgets.add(facebookStatsWidget);
        widgets.add(twitterStatsWidget);
        widgets.add(youtubeStatsWidget);
        this.setWidgets(widgets);
    }
}
