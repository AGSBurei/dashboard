import React, {useEffect, useState} from "react"
import axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";

const CsGoAchievement = ({widget = {}, saveParams}) => {

    const [ach, setAch] = useState([]);

    const getCsGoAch = () =>{
        axios.get(param.csgoAch+`?game=${730}`, {headers: authHeader()})
            .then(res => {
                const csgoAch = res.data.achievementpercentages.achievements
                console.log(csgoAch)
                if(csgoAch.achievementpercentages !== null){
                    setAch(csgoAch);
                }
            }).catch(error => {
            console.log("error:", error)
        })
    }
    return(
        <div>
            <button onClick = {getCsGoAch}>
                check Achievement
            </button>
            <ul>
                {ach.map(item=>{
                    return <li>{item.name} <br></br> {item.percent}% of player have it</li>
                })}
            </ul>
        </div>
    )

}
export default CsGoAchievement;
