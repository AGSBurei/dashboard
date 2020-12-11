import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from "react-router-dom";
import "./App.css";

import AuthService from "./services/auth.service";

import Auth from "./pages/Auth/Auth";
import Board from "./pages/Board/Board";

const App = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [day, setDay] = useState(true);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const switchDay = () => {
        document.querySelector(".day-night-toggle").classList.toggle("day-night-toggle-off")
        document.querySelector("html").classList.toggle("theme-d")
        setDay(!day);
    }

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <Switch>
            <Route exact path={["/", "/login"]} component={Auth}/>
            <Route path="/board" render={() => <Board user={currentUser} switchDay={switchDay} />}/>
        </Switch>
    );
};

export default App;
