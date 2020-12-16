import React, {useEffect, useState} from "react"
import axios from "axios";

const TwitterWidget = () => {
    const submitSearch = (evt) => {
        console.log(evt)
        if (evt.code !== "Enter") return

        //TODO: à supprimer par la suite
        const apikey = "UEImjlTJmlrI9i4ROW8NpmOig";
        const apisecret = "AQ9J48zWrY9JYaBi3O98yv1TTskfbwcF6ohWC1U6QmFvzUvdWl";
        const bearer = "AAAAAAAAAAAAAAAAAAAAADfOKgEAAAAArddi3Cb8rB8eVYSghry%2F0is3HHk%3DOgp4tLxoEuFxkSDOfwtI6rkHxsebCnxP8i14YkU5yNF47ynVma"

        // axios.get(`https://api.twitter.com/1.1/users/search.json?q=${evt.target.value}`)
        //     .then(res => {
        //         console.log(res.data.items)
        //         setQuestions(res.data.items);
        //     }).catch(error => {
        //     console.log("error:", error)
        // })
    };
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://api.twitter.com/1.1/users/show.json?screen_name=lucasmcht',
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAADfOKgEAAAAArddi3Cb8rB8eVYSghry%2F0is3HHk%3DOgp4tLxoEuFxkSDOfwtI6rkHxsebCnxP8i14YkU5yNF47ynVma',
            }
        };

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
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