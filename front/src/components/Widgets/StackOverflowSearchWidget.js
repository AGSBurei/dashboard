import React, {useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";

const StackOverflowSearchWidget = () => {

    const [questions, setQuestions] = useState([])

    const submitSearch = (evt) => {
        console.log(evt)
        if (evt.code !== "Enter") return

        axios.get(`https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=votes&intitle=${evt.target.value}&site=stackoverflow`, { headers: authHeader() })
            .then(res => {
                console.log(res.data.items)
                setQuestions(res.data.items);
            }).catch(error => {
            console.log("error:", error)
        })
    }

    const renderQuestion = (question) => {
        return (
            <a className="stackoverflow-question"
               href={question.link}
               key={Math.random()}
               target="_blank"
               rel="noreferrer"
            >
                {question.score} - {question.title}
            </a>
        )
    }


    return (
        <div>
            <input
                onKeyPress={(evt) => submitSearch(evt)}
                type="text"
                placeholder="Une question ?"
            />

            <div className="stackoverflow-questions">
                {questions.map(question => renderQuestion(question))}
            </div>
        </div>
    )
}

export default StackOverflowSearchWidget;
