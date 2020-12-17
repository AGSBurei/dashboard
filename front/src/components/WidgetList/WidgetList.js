import React from "react";
import "./WidgetList.style.scss"

import param from "../../param";

import CloseIcon from "../../assets/imgs/cancel.svg"

const WidgetList = ({isShow, toggleShow, addWidget}) => {

    const renderButton = (widget) => {
        return (
            <button onClick={() => addWidget(widget.name)}>
                {widget.display_name}
            </button>
        )
    }

    return (
        <div
            className={`WidgetList ${isShow ? "visible" : ""}`}
        >
            <button className="exit" onClick={toggleShow}>
                <img src={CloseIcon} alt="close"/>
            </button>
            <h2>Available widgets</h2>
            <div className="available-widgets">
                {param.widgets.map(widget => renderButton(widget))}
            </div>
        </div>
    )
}

export default WidgetList
