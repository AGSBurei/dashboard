import React, {useEffect, useState} from "react"
import axios from "axios";

const TwitterWidget = () => {
    const submitSearch = (evt) => {
        if (evt.code !== "Enter") return;
        axios.get(`http://localhost:8080/api/widget/twitter_search?query=${evt.target.value}`)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
            console.log("error:", error)
        })

    };
    useEffect(() => {


    });

    return (
        <div>
            <input
                onKeyPress={(evt) => submitSearch(evt)}
                type="text"
                placeholder="Quel utilisateur voulez vous voir ?"
            />

            <div className="stackoverflow-questions">

            </div>
        </div>
    )
}
export default TwitterWidget;