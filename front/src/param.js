import React from "react";
import PokemonWidget from "./components/Widgets/PokemonWidget";
import TwitterWidget from "./components/Widgets/TwitterWidget";
import StackOverflowSearchWidget from "./components/Widgets/StackOverflowSearchWidget";
import FootballLiveScoreWidget from "./components/Widgets/FootballLiveScoreWidget";

const host = "http://localhost:8080/";

export default {
    host: host,
    auth: host + "api/auth/",
    twitter: host + "api/widget/twitter_search",
    footballLiveScore: host + "api/widget/football/live-score",
    widget: {
        save: host + "api/user/widget",
        delete: host + "api/user/widgets/delete",
        new: host + "api/user/widgets/new",
        saveAccount: host + "api/user/widgets",
    },


    //Liste des widgets disponibles
    widgets: [
        {
            name: "pokemon-main",
            display_name: "Pokemon",
            size: 25,
            component: (widget, saveParams) => <PokemonWidget widget={widget} saveParams={saveParams}/>,
        },
        {
            name: "twitter-profile",
            display_name: "Twitter",
            size: 50,
            component: (widget, saveParams) => <TwitterWidget widget={widget} saveParams={saveParams}/>,
        },
        {
            name: "stackoverflow-search",
            display_name: "StackOverflow Search",
            size: 50,
            component: (widget, saveParams) => <StackOverflowSearchWidget widget={widget} saveParams={saveParams}/>,
        },
        {
            name: "football-live-score",
            display_name: "Football Live Score",
            size: 100,
            component: (widget, saveParams) => <FootballLiveScoreWidget/>,
        },
    ]


}
