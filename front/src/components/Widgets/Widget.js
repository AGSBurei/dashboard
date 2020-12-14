import React, {useState} from "react";
import PokemonWidget from "./PokemonWidget";

import "./Widgets.style.scss"
import StackOverflowSearchWidget from "./StackOverflowSearchWidget";

const Widget = ({widgetType, removeWidget}) => {

    const [menu, setMenu] = useState(false)

    const toggleWidgetMenu = () => {
        setMenu(!menu)
    }

    const getWidgetName = () => {
        switch (widgetType) {
            case "pokemon-main": {
                return "Pokemon"
            }
            case "stackoverflow-search": {
                return "StackOverflow Search"
            }
            default: {
                return <div>default</div>
            }
        }
    }

    const renderWidgetContent = () => {
        switch (widgetType) {
            case "pokemon-main": {
                return <PokemonWidget />
            }
            case "stackoverflow-search": {
                return <StackOverflowSearchWidget />
            }
            default: {
                return <div>default</div>
            }
        }
    }

    return (
        <div className={`container-block ${widgetType}`}>
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
