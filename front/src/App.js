import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from "react-router-dom";
import "./App.css";

import Auth from "./pages/Auth/Auth";
import Board from "./pages/Board/Board";

const App = () => {
    const [day, setDay] = useState(true);

    const switchDay = () => {
        document.querySelector(".day-night-toggle").classList.toggle("day-night-toggle-off")
        document.querySelector("html").classList.toggle("theme-d")
        setDay(!day);
    }

    return (
        <Switch>
            <Route exact path={["/", "/login"]} render={() => <Auth switchDay={switchDay} />}/>
            <Route path="/board" render={() => <Board switchDay={switchDay} />}/>
        </Switch>
    );
};

export default App;
