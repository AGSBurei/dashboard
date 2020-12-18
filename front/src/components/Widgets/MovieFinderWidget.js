import React, {useEffect, useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";

const MovieFinderWidget = ({widget = {}, saveParams}) => {

    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
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
        if (evt.target.value.length >= 3) {
            submitSearch(evt.target.value)
        }
    };

    const submitSearch = (searchValue) => {
        axios.get(param.movie + "?query=" + searchValue, {headers: authHeader()})
            .then(res => {
                console.log(res.data)
                setMovieList(res.data.results);
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
            <a className="movie-details"
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
                onKeyDown={(evt) => onChange(evt)}
                value={search}
                list="movieList" name="movieList"
                onChange={(evt) => onChange(evt)}
                type="text"
                placeholder="What movie do you want to search?"
            />
            <datalist id="movieList">
                {movieList && movieList.map(movie => {
                    return (
                        <option key={movie.title} value={movie.title}/>
                    )
                })}
            </datalist>

            <div className="movie-results">
                {/*{movieList.map(news => renderNews(news))}*/}
            </div>
        </div>
    )
};

export default MovieFinderWidget;
