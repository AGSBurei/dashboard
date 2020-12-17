import React, {useState, useEffect} from "react";

import "./Widgets.style.scss"
import Axios from "axios";
import authHeader from "../../services/auth-header";
import param from "../../param";

const Widget = ({widget, removeWidget}) => {

    const [menu, setMenu] = useState(false);
    const [widgetInfo, setWidgetInfo] = useState({});

    const toggleWidgetMenu = () => {
        setMenu(!menu)
    };

    useEffect(() => {
        param.widgets.forEach((widgetSave) => {
            if (widgetSave.name === widget.name) {
                setWidgetInfo(widgetSave)
            }
        })

    }, []);

    const renderWidgetContent = () => {
        if (widgetInfo.component) {
            return widgetInfo.component(widget, saveWidgetParams)
        }
    };

    const saveWidgetParams = (widget) => {
        Axios.post(param.widget.save,
            widget,
            {headers: authHeader()}
        )
    };

    return (
        <div className={`container-block ${widget.name} widget-${widgetInfo.size}`}>
            <div className="container-bd"/>
            <div className="container-bg">
                <div className="container-header">
                    <div className="container-logo t"/>
                    <h3>
                        {widgetInfo.display_name}
                    </h3>
                    <div className="container-line"/>
                    <div className="container-more" onClick={toggleWidgetMenu}>
                        <div className={`widget-menu ${menu ? "widget-menu-" : ""}`}>
                            <div className="widget-menu-opt" onClick={removeWidget}>Delete</div>
                        </div>
                    </div>
                </div>
                <div className="container-api">
                    {
                        renderWidgetContent()
                    }
                </div>
            </div>
        </div>
    )
}

export default Widget;
