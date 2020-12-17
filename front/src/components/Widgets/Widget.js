import React, {useState} from "react";
import PokemonWidget from "./PokemonWidget";

import "./Widgets.style.scss"
import StackOverflowSearchWidget from "./StackOverflowSearchWidget";
import TwitterWidget from "./TwitterWidget";

const Widget = ({widgetType, removeWidget}) => {

    const [menu, setMenu] = useState(false)

    const toggleWidgetMenu = () => {
        setMenu(!menu)
    }



    const getWidgetName = () => {

    }

    const renderWidgetContent = () => {

    }


    return (
        <div  className={`container-block ${widgetType} ${size}`}>
            <div className="container-bd"/>
            <div className="container-bg">
                <div className="container-header">
                    <div className="container-logo t"/>
                    <h3>
                        {getWidgetName()}
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
