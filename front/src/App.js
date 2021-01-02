import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from "react-router-dom";
import "./App.css";

import Auth from "./pages/Auth/Auth";
import Board from "./pages/Board/Board";

const App = () => {


    return (
        <Switch>
            <Route exact path={["/", "/login"]} render={() => <Auth />}/>
            <Route path="/board" render={() => <Board />}/>
        </Switch>
    );
};

export default App;
