import React, {useEffect, useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";
import "./Widgets.style.scss"

const CsGoGameNews = ({widget = {}, saveParams}) => {

    //const [games, setGames] = useState([]);
    const [news, setNews] = useState([]);

    //const getGames = () =>{
    //    if(games.length === 0){
    //        axios.get(param.steamAppList(),{
    //            headers: authHeader(),
    //            params: {
    //                _limit: 10
    //            }
    //        })
    //            .then(res => {
    //                setGames(res.data.applist.apps);
    //            }).catch(error => {
    //             console.log("error:", error)
    //         })
    //     }
    //}

    //useEffect(() => {
    //    getGames()
    //},[])

    const getGameNews = () =>{
        axios.get(param.steamNews+`?game=${730}`, {headers: authHeader()})
            .then(res => {
                const gameNews = res.data.appnews.newsitems
                console.log(gameNews)
                if(gameNews.newsitems !== null){
                    setNews(gameNews);
                }
            }).catch(error => {
            console.log("error:", error)
        })
    }
    return(
        <div>
            <button onClick = {getGameNews}>
                check csgo news
            </button>
           <p>
               {news.map(html => {
                  return <div className="csgo" dangerouslySetInnerHTML={{__html: html.contents}}/>}
               )}
           </p>
        </div>
    )

}
export default CsGoGameNews;
