import React, {useEffect, useState} from "react"
import authHeader from "../../services/auth-header";
import Axios from "axios";

import param from "../../param";
import MatchCard from "../MatchCard/MatchCard";

const FootballLiveScoreWidget = ({widget, saveParams}) => {
    const [matchs, setMatchs] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries()
    }, [])

    const getCountries = () => {
        Axios.get(param.footballCountries, {headers: authHeader()})
            .then((res) => {
                const response = res.data
                if (!response.success) return
                setCountries(response.data.country)
                getLiveMatchs()
            })
    }

    const getLiveMatchs = (country = "") => {
        if (countryNotInCountries(country) && country !== "") return
        Axios.get(param.footballLiveScore(country), {headers: authHeader()})
            .then((res) => {
                const response = res.data
                if (!response.success) return
                setMatchs(res.data.data.match)
                saveParams({
                    ...widget,
                    params: {
                        country
                    }
                })
            })
    }

    const countryNotInCountries = (country) => {
        const find = countries.find(countryItem => countryItem.id === country)
        return find === undefined
    }

    return (
        <div>
            <select
                onChange={(event) => getLiveMatchs(event.target.value)}
                id={`countriesList${widget.id}`}
                name="countriesList"
            >
                <option key="0" value="">
                    All countries
                </option>
                {countries.map(country => {
                    return (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    )
                })}
            </select>
            <div className="matchs-container">
                {matchs.map(match => <MatchCard key={match.id} match={match}/>)}
            </div>
        </div>
    )
}

export default FootballLiveScoreWidget;
