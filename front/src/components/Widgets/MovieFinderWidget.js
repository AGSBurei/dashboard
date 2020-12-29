import React, {useEffect, useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";
import Moment from "moment"


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
        if (evt.nativeEvent.data === undefined) {
            //Oui on touche au dom mais Raf ok ?
            let movieId = parseInt(document.querySelector(`#movieList option[value="${evt.target.value}"]`).getAttribute("data-id"))
            const result = movieList.filter(movie => movie.id === movieId)
            setSelectedMovie(result[0]);
            return;
        }
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
    const displayDate = (date) => {
        console.log(date)
        if (!date) return;
        let release = Moment(date)
        Moment.locale('fr', {
            months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
        })

        return release.format('DD MMMM YYYY');
    }

    return (
        <div>
            <input
                onChange={(evt) => onChange(evt)}
                list="movieList" name="movieList"
                type="text"
                id="movie-input"
                placeholder="What movie do you want to search?"
            />

            <datalist id="movieList">
                {movieList && movieList.map(movie => {
                    return (
                        <option data-id={movie.id} key={movie.id} value={movie.title}/>
                    )
                })}
            </datalist>

            {selectedMovie &&
            <div className="movie-results">
                {selectedMovie.poster_path &&
                <div className="backdrop">
                    <img src={"http://image.tmdb.org/t/p/w300/" + selectedMovie.poster_path} alt=""/>
                </div>
                }
                <div className={"content"}>
                    <h3>{selectedMovie.title}</h3>
                    <span className="date">{displayDate(selectedMovie.release_date)}</span>
                    <p>{selectedMovie.overview}</p>
                </div>
            </div>
            }
        </div>
    )
};

export default MovieFinderWidget;
