import React, {useEffect, useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";

const MovieFinderWidget = ({widget = {}, saveParams}) => {

    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});
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
        console.log(evt);
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
    const renderMovie = (movie) => {
        console.log(movie)
    }

    return (
        <div>
            <input
                onKeyDown={(evt) => onChange(evt)}
                list="movieList" name="movieList"
                type="text"
                placeholder="What movie do you want to search?"
            />
            <datalist onClick={() => renderMovie()} id="movieList">
                {movieList && movieList.map(movie => {
                    return (
                        <option key={movie.id} value={movie.title}/>
                    )
                })}
            </datalist>

            <div className="movie-results">
                {selectedMovie.poster_path &&
                <img src={"http://image.tmdb.org/t/p/w300/" + selectedMovie.poster_path} alt=""/>
                }
            </div>
        </div>
    )
};

export default MovieFinderWidget;
