import React from "react";
import PokemonWidget from "./components/Widgets/PokemonWidget";
import TwitterWidget from "./components/Widgets/TwitterWidget";
import StackOverflowSearchWidget from "./components/Widgets/StackOverflowSearchWidget";
import NewsWidget from "./components/Widgets/NewsWidget"
const host = "http://localhost:8080/";

export default {
    host: host,
    auth: host + "api/auth/",
    twitter: host + "api/widget/twitter_search",
    stackoverflow: host + "api/widget/stackoverflow/search",
    news: host + "api/widget/news_search",
    widget:{
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
            name: "news-widget",
            display_name: "Breaking news",
            size: 50,
            component: (widget, saveParams) => <NewsWidget widget={widget} saveParams={saveParams}/>,
        },
    ]


}