import React, {useEffect, useState} from "react"
import Axios from "axios";

import authHeader from "../../services/auth-header";
import param from "../../param";

const WeatherNowWidget = ({widget = {}, saveParams}) => {

    const [results, setResults] = useState({
        weather:[
            {
                main:"Weather",
                description:"Description",
                icon:"01d"
            }
        ],
        main: {
            temp: "0",
            temp_min: "0",
            temp_max: "0",
        },
        URLicon:"http://openweathermap.org/img/wn/01d@2x.png"
    })

    const getWeatherNow = () =>{
        var input_search = document.getElementById("weather_search").value;

        Axios.get(param.host + "api/widget/weather/Now?search="+ input_search , {headers: authHeader()})
        // Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+ input_search +"&appid=6b97fa35455d3e49f0de2b88aeba4ee2")
            .then(res => {
                setResults(res.data);
                console.log(res.data);
                res.data.URLicon = "http://openweathermap.org/img/wn/"+res.data.weather[0].icon+"@2x.png";

                res.data.main.temp = (res.data.main.temp - 273).toFixed(1);
                res.data.main.temp_min = (res.data.main.temp_min - 273).toFixed(1);
                res.data.main.temp_max = (res.data.main.temp_max - 273).toFixed(1);

                // console.log(res.data.URLicon);
            }).catch(error => {
            console.log("error:", error)
        })
    };

    return(
        <div>
            <div className="wid-meteo-input">
                <input id="weather_search" type="text" placeholder="Where?"/>
                <button onClick={() => getWeatherNow()}></button>
            </div>

            <div className="wid-meteo-block1">
                <img src={results.URLicon} className="wid-meteo-now-img" alt="weather0"/>
            </div><div className="wid-meteo-block2">
                <h3>{results.weather[0].main}</h3>
                <p>{results.weather[0].description}</p>
                <h4>{results.main.temp}<span>({results.main.temp_min}-{results.main.temp_max}°C)</span></h4>
            </div>

        </div>
    )
}
export default WeatherNowWidget;
/*
            <h4>Weather:
                <span>{main}</span>
            </h4>
            <h4>Description:
                <span>{description}</span>
            </h4>
            <h4>icon:
                <span>{icon}</span>
            </h4>

            <h4>Temperature:
                <span>{temp}</span>
            </h4>
            <h4>Temperature Min.:
                <span>{temp_min}</span>
            </h4>
            <h4>Temperature Max.:
                <span>{temp_max}</span>
            </h4>

            <style>
                .wid-weather-icon{
                    background-image= url("http://openweathermap.org/img/wn/"+ results.weather[0].icon +"@2x.png");
                }
            </style>

                    width: 32px;
                    height: 32px;


            <div style={results.URLicon}></div>
 */
