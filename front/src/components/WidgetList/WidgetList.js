import React from "react";
import "./WidgetList.style.scss"

import CloseIcon from "../../assets/imgs/cancel.svg"

const WidgetList = ({isShow, toggleShow, addWidget}) => {

    return (
        <div
            className={`WidgetList ${isShow ? "visible" : ""}`}
        >
            <button className="exit" onClick={toggleShow}>
                <img src={CloseIcon} alt="close"/>
            </button>
            <h2>Available widgets</h2>
            <div className="available-widgets">
                <button onClick={() => addWidget("pokemon-main")}>
                    Pokemon
                </button>
                <button onClick={() => addWidget("stackoverflow-search")}>
                    StackOverflow Search
                </button>
                <button onClick={() => addWidget("twitter-profile")}>
                    Twitter widget
                </button>
                <button onClick={() => addWidget("news-widget")}>
                    News widget
                </button>
            </div>
        </div>
    )
}

export default WidgetList
