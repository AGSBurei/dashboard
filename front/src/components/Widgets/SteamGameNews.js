import React, {useEffect, useState} from "react"
import axios from "axios";

import authHeader from "../../services/auth-header";
import param from "../../param";
import Axios from "axios";

const SteamGameNews = ({widget = {}, saveParams}) => {
    const getGameNews = () =>{
        Axios.get(param)
    }
}
export default SteamGameNews;
