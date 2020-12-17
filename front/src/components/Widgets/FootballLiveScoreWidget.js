import React, {useEffect, useState} from "react"
import authHeader from "../../services/auth-header";
import Axios from "axios";

import param from "../../param";

const FootballLiveScoreWidget = () => {
    const [matchs, setMatchs] = useState([])

    useEffect(() => {
        Axios.get(param.footballLiveScore, {headers: authHeader()})
            .then((res) => {
                console.log(res.data)
                setMatchs(res.data.data.match)
            })
    }, [])

    const renderMatch = (match) => {
        return (
            <div className="match-card">
                <h3>{match.home_name} - {match.away_name}</h3>
                <h4>{match.score}</h4>
                <p className="match-time">
                    Elapsed time: {match.time === "FT" ? "Finished" : match.time + " minutes"}
                </p>
                <p className="match-hour">
                    Start: {match.scheduled}, Timezone: GMT
                </p>
            </div>
        )
    }

    return (
        <div>
                {matchs.map(match => renderMatch(match))}
        </div>
    )
}

export default FootballLiveScoreWidget;
