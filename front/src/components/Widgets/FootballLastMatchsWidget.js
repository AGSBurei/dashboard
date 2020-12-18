import React, {useEffect, useState} from "react"
import authHeader from "../../services/auth-header";
import Axios from "axios";

import param from "../../param";
import MatchCard from "../MatchCard/MatchCard";

const FootballLastMatchsWidget = ({widget, saveParams}) => {
    const [matchs, setMatchs] = useState([])
    const [competitions, setCompetitions] = useState([])

    useEffect(() => {
        getCompetitions()
    }, [])

    const getCompetitions = () => {
        Axios.get(param.footballCompetitions, {headers: authHeader()})
            .then((res) => {
                const response = res.data
                if (!response.success) return
                setCompetitions(response.data.competition)
                getLastMatchs()
            })
    }



    const getLastMatchs = (competition = "5") => {
        Axios.get(param.footballLastMatchs(competition), {headers: authHeader()})
            .then((res) => {
                const response = res.data
                if (!response.success) return
                setMatchs(response.data.match)
                saveParams({
                    ...widget,
                    params: {
                        competition
                    }
                })
            })
    }

    return (
        <div>
            <select
                onChange={(event) => getLastMatchs(event.target.value)}
                id={`competitionsList${widget.id}`}
                name="competitionsList"
            >
                {competitions.map(competition => {
                    return (
                        <option key={competition.id} value={competition.id}>
                            {competition.name}
                        </option>
                    )
                })}
            </select>
            <div className="matchs-container">
                {matchs.map(match => <MatchCard key={match.id} match={match} />)}
            </div>
        </div>
    )
}

export default FootballLastMatchsWidget;
