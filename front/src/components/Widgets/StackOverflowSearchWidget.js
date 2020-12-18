import React, {useEffect, useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";

const StackOverflowSearchWidget = ({widget = {}, saveParams}) => {

    const [questions, setQuestions] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        if (widget.params !== undefined && widget.params.search !== undefined) {
            setSearch(widget.params.search)
            if (widget.params.search) {
                submitSearch(widget.params.search)
            }
        }
    },[])

    const onChange = (evt) => {
        setSearch(evt.target.value)
        if (evt.code !== "Enter") return
        submitSearch(evt.target.value)
    }

    const submitSearch = (searchValue) => {
        axios.get(param.stackoverflow + "?search=" + searchValue, { headers: authHeader() })
            .then(res => {
                setQuestions(res.data.items);
                saveParams({
                    ...widget,
                    params: {
                        search: searchValue
                    }
                })
            }).catch(error => {
            console.log("error:", error)
        })
    }

    const renderQuestion = (question) => {
        return (
            <a className="stackoverflow-question"
               href={question.link}
               key={question.link}
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
                onKeyUp={(evt) => onChange(evt)}
                value={search}
                onChange={(evt) => onChange(evt)}
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
