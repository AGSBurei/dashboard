import React from "react"

import "./MatchCard.style.scss"

const MatchCard = ({match}) => {
    return (
        <div className="match-card">
            <h3>{match.home_name} - {match.away_name}</h3>
            <h4>{match.score}</h4>
            <p className="match-time">
                Elapsed time: {match.time === "FT" ? "Finished" : match.time + " minutes"}
            </p>
            {match.date ? (
                <p className="match-hour">
                    Start: {match.date}
                </p>
            ) : (
                <p className="match-hour">
                    Start: {match.scheduled}, Timezone: GMT
                </p>
            )}
        </div>
    )
}

export default MatchCard;
