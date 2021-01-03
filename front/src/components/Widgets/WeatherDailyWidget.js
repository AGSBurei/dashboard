import React, {useEffect, useState} from "react"
import Axios from "axios";

import authHeader from "../../services/auth-header";
import param from "../../param";

const WeatherDailyWidget = ({widget = {}, saveParams}) => {

    const [position, setPosition] = useState({
        coord: {
            lon: 0,
            lat: 0
        }
    })
    const [results, setResults] = useState({
        daily:[
            {
                temp: {
                    min: "0",
                    max: "0",
                },
                weather:[
                    {
                        main:"Weather",
                        description:"Description",
                        icon:"01d"
                    }
                ]
            },
            {
                temp: {
                    min: "0",
                    max: "0",
                },
                weather:[
                    {
                        main:"Weather",
                        description:"Description",
                        icon:"01d"
                    }
                ]
            },
            {
                temp: {
                    min: "0",
                    max: "0",
                },
                weather:[
                    {
                        main:"Weather",
                        description:"Description",
                        icon:"01d"
                    }
                ]
            },
            {
                temp: {
                    min: "0",
                    max: "0",
                },
                weather:[
                    {
                        main:"Weather",
                        description:"Description",
                        icon:"01d"
                    }
                ]
            },
            {
                temp: {
                    min: "0",
                    max: "0",
                },
                weather:[
                    {
                        main:"Weather",
                        description:"Description",
                        icon:"01d"
                    }
                ]
            },
            {
                temp: {
                    min: "0",
                    max: "0",
                },
                weather:[
                    {
                        main:"Weather",
                        description:"Description",
                        icon:"01d"
                    }
                ]
            },
            {
                temp: {
                    min: "0",
                    max: "0",
                },
                weather:[
                    {
                        main:"Weather",
                        description:"Description",
                        icon:"01d"
                    }
                ]
            },
        ],
        URLicon0:"http://openweathermap.org/img/wn/01d@2x.png",
        URLicon1:"http://openweathermap.org/img/wn/01d@2x.png",
        URLicon2:"http://openweathermap.org/img/wn/01d@2x.png",
        URLicon3:"http://openweathermap.org/img/wn/01d@2x.png",
        URLicon4:"http://openweathermap.org/img/wn/01d@2x.png",
        URLicon5:"http://openweathermap.org/img/wn/01d@2x.png",
        URLicon6:"http://openweathermap.org/img/wn/01d@2x.png"
    })

    var today = new Date();

    var date0 = new Date().setDate(new Date().getDate());
    var date1 = new Date().setDate(new Date().getDate()+1);
    var date2 = new Date().setDate(new Date().getDate()+2);
    var date3 = new Date().setDate(new Date().getDate()+3);
    var date4 = new Date().setDate(new Date().getDate()+4);
    var date5 = new Date().setDate(new Date().getDate()+5);
    var date6 = new Date().setDate(new Date().getDate()+6);

    var date0_ = new Date(date0).getDate()+"/"+(new Date(date0).getMonth()+1);
    var date1_ = new Date(date1).getDate()+"/"+(new Date(date1).getMonth()+1);
    var date2_ = new Date(date2).getDate()+"/"+(new Date(date2).getMonth()+1);
    var date3_ = new Date(date3).getDate()+"/"+(new Date(date3).getMonth()+1);
    var date4_ = new Date(date4).getDate()+"/"+(new Date(date4).getMonth()+1);
    var date5_ = new Date(date5).getDate()+"/"+(new Date(date5).getMonth()+1);
    var date6_ = new Date(date6).getDate()+"/"+(new Date(date6).getMonth()+1);


    const getWeatherDaily = () =>{

        var input_search = document.getElementById("weather_search2").value;

        Axios.get(param.host + "api/widget/weather/Now?search="+ input_search , {headers: authHeader()})
            .then(res => {
                setPosition(res.data);
                console.log(position.coord.lon);
                console.log(position.coord.lat);
            }).catch(error => {
            console.log("error:", error)
        })

        // Axios.get(param.host + "api/widget/weather/Daily?lat=" + position.coord.lon+ "?lon=" + position.coord.lon , {headers: authHeader()})
        Axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + position.coord.lat+ "&lon=" + position.coord.lon + "&exclude=minutely,hourly,alert&appid=6b97fa35455d3e49f0de2b88aeba4ee2")
            .then(res => {
                console.log(res.data);


                res.data.URLicon0 = "http://openweathermap.org/img/wn/"+res.data.daily[0].weather[0].icon+"@2x.png";
                res.data.URLicon1 = "http://openweathermap.org/img/wn/"+res.data.daily[1].weather[0].icon+"@2x.png";
                res.data.URLicon2 = "http://openweathermap.org/img/wn/"+res.data.daily[2].weather[0].icon+"@2x.png";
                res.data.URLicon3 = "http://openweathermap.org/img/wn/"+res.data.daily[3].weather[0].icon+"@2x.png";
                res.data.URLicon4 = "http://openweathermap.org/img/wn/"+res.data.daily[4].weather[0].icon+"@2x.png";
                res.data.URLicon5 = "http://openweathermap.org/img/wn/"+res.data.daily[5].weather[0].icon+"@2x.png";
                res.data.URLicon6 = "http://openweathermap.org/img/wn/"+res.data.daily[6].weather[0].icon+"@2x.png";

                res.data.daily[0].temp.min = (res.data.daily[0].temp.min - 273).toFixed(1);
                res.data.daily[0].temp.max = (res.data.daily[0].temp.max - 273).toFixed(1);

                res.data.daily[1].temp.min = (res.data.daily[1].temp.min - 273).toFixed(1);
                res.data.daily[1].temp.max = (res.data.daily[1].temp.max - 273).toFixed(1);

                res.data.daily[2].temp.min = (res.data.daily[2].temp.min - 273).toFixed(1);
                res.data.daily[2].temp.max = (res.data.daily[2].temp.max - 273).toFixed(1);

                res.data.daily[3].temp.min = (res.data.daily[3].temp.min - 273).toFixed(1);
                res.data.daily[3].temp.max = (res.data.daily[3].temp.max - 273).toFixed(1);

                res.data.daily[4].temp.min = (res.data.daily[4].temp.min - 273).toFixed(1);
                res.data.daily[4].temp.max = (res.data.daily[4].temp.max - 273).toFixed(1);

                res.data.daily[5].temp.min = (res.data.daily[5].temp.min - 273).toFixed(1);
                res.data.daily[5].temp.max = (res.data.daily[5].temp.max - 273).toFixed(1);

                res.data.daily[6].temp.min = (res.data.daily[6].temp.min - 273).toFixed(1);
                res.data.daily[6].temp.max = (res.data.daily[6].temp.max - 273).toFixed(1);

                setResults(res.data);
                console.log(results);

            }).catch(error => {
            console.log("error:", error)
        })
    };


    return(
        <div>
            <div className="wid-meteo-input">
                <input id="weather_search2" type="text" placeholder="Where?"/>
                <button onClick={() => getWeatherDaily()}></button>
            </div>

            <div className="wid-meteo-container">

                <div className="wid-meteo-data">
                    <h6>{date0_}:</h6>
                    <img src={results.URLicon0} width="24" height="24"/>
                    <strong>{results.daily[0].weather[0].main}</strong>
                    <p>({results.daily[0].temp.min}-{results.daily[0].temp.max}°C)</p>
                </div>

                <div className="wid-meteo-data">
                    <h6>{date1_}:</h6>
                    <img src={results.URLicon1} width="24" height="24"/>
                    <strong>{results.daily[1].weather[0].main}</strong>
                    <p>({results.daily[1].temp.min}-{results.daily[1].temp.max}°C)</p>
                </div>


                <div className="wid-meteo-data">
                    <h6>{date2_}:</h6>
                    <img src={results.URLicon2} width="24" height="24"/>
                    <strong>{results.daily[2].weather[0].main}</strong>
                    <p>({results.daily[2].temp.min}-{results.daily[2].temp.max}°C)</p>
                </div>

                <div className="wid-meteo-data">
                    <h6>{date3_}:</h6>
                    <img src={results.URLicon3} width="24" height="24"/>
                    <strong>{results.daily[3].weather[0].main}</strong>
                    <p>({results.daily[3].temp.min}-{results.daily[3].temp.max}°C)</p>
                </div>

                <div className="wid-meteo-data">
                    <h6>{date4_}:</h6>
                    <img src={results.URLicon4} width="24" height="24"/>
                    <strong>{results.daily[4].weather[0].main}</strong>
                    <p>({results.daily[4].temp.min}-{results.daily[4].temp.max}°C)</p>
                </div>

                <div className="wid-meteo-data">
                    <h6>{date5_}:</h6>
                    <img src={results.URLicon5} width="24" height="24"/>
                    <strong>{results.daily[5].weather[0].main}</strong>
                    <p>({results.daily[5].temp.min}-{results.daily[5].temp.max}°C)</p>
                </div>

                <div className="wid-meteo-data">
                    <h6>{date6_}:</h6>
                    <img src={results.URLicon6} width="24" height="24"/>
                    <strong>{results.daily[6].weather[0].main}</strong>
                    <p>({results.daily[6].temp.min}-{results.daily[0].temp.max}°C)</p>
                </div>



            </div>

        </div>
    )
}
export default WeatherDailyWidget;

/*
<div style={{backgroundImage:{results.URLicon0}}}></div>

            <p>{date1_}:
                <img src={results.URLicon1} width="24" height="24"/>
                {results.daily[1].weather[0].main} (
                {results.daily[1].temp.min}-
                {results.daily[1].temp.max}°C)
            </p>

                <div className="wid-meteo-data">
                    <h6>{date2_}:</h6>
                    <img src={results.URLicon2} width="24" height="24" alt="weather0"/>
                    <strong>{results.daily[2].weather[0].main}</strong>
                    <p>({results.daily[2].temp.min}-{results.daily[2].temp.max}°C)</p>
                </div>

 */
