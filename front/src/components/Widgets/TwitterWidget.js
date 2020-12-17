import React, {useEffect, useState} from "react"
import axios from "axios";
import param from "../../param";

const TwitterWidget = () => {

    const [results, setResults] = useState([])

    const submitSearch = (evt) => {
        console.log(evt.target.value)
        if (evt.target.value.length > 3) {
            axios.get(param.twitter + `?query=${evt.target.value}`)
                .then(res => {
                    setResults(res.data)
                }).catch(error => {
                console.log("error:", error)
            })
        }
    };
    const renderResult = (result) => {
        return (
            <a className="stackoverflow-question"
               href={result.link}
               key={result.id}
               target="_blank"
               rel="noreferrer"
            >
                <span><img alt={"Photo de profil"} src={result.profile_image_url_https}/></span>{result.name}
            </a>
        )
    }


    return (
        <div>
            <input
                onKeyUp={(evt) => submitSearch(evt)}
                type="text"
                placeholder="Quel utilisateur voulez vous voir ?"
            />

            <div className="twitter-results">
                {results.map(question => renderResult(question))}
            </div>
        </div>
    )
}
export default TwitterWidget;