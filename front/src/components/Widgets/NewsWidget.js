import React, {useEffect, useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";

const NewsWidget = ({widget = {}, saveParams}) => {

    const [newsList, setNewsList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (widget.params !== undefined && widget.params.search !== undefined) {
            setSearch(widget.params.search);
            if (widget.params.search) {
                submitSearch(widget.params.search)
            }
        }
    }, []);

    const onChange = (evt) => {
        setSearch(evt.target.value);
        if (evt.code !== "Enter") return;
        submitSearch(evt.target.value)
    };

    const submitSearch = (searchValue) => {
        axios.get(param.news + "?query=" + searchValue, {headers: authHeader()})
            .then(res => {
                setNewsList(res.data.articles);
                saveParams({
                    ...widget,
                    params: {
                        search: searchValue
                    }
                })
            }).catch(error => {
            console.log("error:", error)
        })
    };

    const renderNews = (news) => {
        return (
            <a className="news-details"
               href={news.url}
               key={news.url}
               target="_blank"
               rel="noreferrer"
            >
                <span>{news.title} - <span className={"author"}>{news.author}</span></span>
            </a>
        )
    };

    return (
        <div>
            <input
                onChange={(evt) => onChange(evt)}
                value={search}
                type="text"
                placeholder="What do you want to search (press enter to validate) ?"
            />

            <div className="news-result">
                {newsList.map(news => renderNews(news))}
            </div>
        </div>
    )
};

export default NewsWidget;
