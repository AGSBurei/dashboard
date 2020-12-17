
const host = "http://localhost:8080/"

export default {
    host: host,
    auth: host + "api/auth/",
    twitter: host + "api/widget/twitter_search",


    //Liste des widgets disponibles
    widgets: [
        {
            name: "pokemon-main",
            display_name: "Pokemon",
            size: 25,
            component: "<PokemonWidget/>",
        },
        {
            name: "twitter-profile",
            display_name: "Twitter",
            size: 50,
            component: "<TwitterWidget/>",
        },
        {
            name: "stackoverflow-search",
            display_name: "StackOverflow Search",
            size: 25,
            component: "<StackOverflowSearchWidget/>",
        },
    ]

}