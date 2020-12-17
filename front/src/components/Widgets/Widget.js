import React, {useState} from "react";
import PokemonWidget from "./PokemonWidget";

import "./Widgets.style.scss"
import StackOverflowSearchWidget from "./StackOverflowSearchWidget";
import Axios from "axios";
import authHeader from "../../services/auth-header";
import TwitterWidget from "./TwitterWidget";

const Widget = ({widget, removeWidget}) => {

    const [menu, setMenu] = useState(false)

    const toggleWidgetMenu = () => {
        setMenu(!menu)
    }


    const renderWidgetContent = () => {
        switch (widget.name) {
            case "pokemon-main": {
                return <PokemonWidget widget={widget} saveParams={saveWidgetParams}/>
            }
            case "stackoverflow-search": {
                return <StackOverflowSearchWidget widget={widget} saveParams={saveWidgetParams}/>
            }
            default: {
                return <div>default</div>
            }
        }
    }

    const saveWidgetParams = (widget) => {
        Axios.post("http://localhost:8080/api/user/widget",
            widget,
            {headers: authHeader()}
        )
    }

    return (
        <div  className={`container-block ${widget.name} ${3}`}>
            <div className="container-bd"/>
            <div className="container-bg">
                <div className="container-header">
                    <div className="container-logo t"/>
                    <h3>
                        {3}
                    </h3>
                    <div className="container-line"/>
                    <div className="container-more" onClick={toggleWidgetMenu}>
                        <div className={`widget-menu ${menu ? "widget-menu-" : ""}`}>
                            <div className="widget-menu-opt" onClick={removeWidget}>Delete</div>
                        </div>
                    </div>
                </div>
                <div className="container-api">
                    {renderWidgetContent()}
                </div>
            </div>
        </div>
    )
}

export default Widget;
