import React from "react";

const Widget = ({name}) => {
    return (
        <div className="container-block">
            <div className="container-bd"/>
            <div className="container-bg">
                <div className="container-header">
                    <div className="container-logo t"/>
                    <h3>
                        {name}
                    </h3>
                    <div className="container-line"/>
                    <div className="container-more" onClick="open_widgetmenu(this)">
                        <div className="widget-menu">
                            <div className="widget-menu-opt" onClick="remove_widget(this)">Delete</div>
                        </div>
                    </div>
                </div>
                <div className="container-api">

                </div>
            </div>
        </div>
    )
}

export default Widget;
