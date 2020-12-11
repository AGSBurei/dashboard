import React from "react";
import "./WidgetList.style.css"

const WidgetList = ({isShow, toggleShow, addWidget}) => {
    return (
        <div className={`WidgetList ${isShow ? "visible" : ""}`}>
            Cool
            <button onClick={toggleShow}>exit</button>
            <button onClick={addWidget}>add</button>
        </div>
    )
}

export default WidgetList
