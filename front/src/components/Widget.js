import React, {useState} from "react";

const Widget = ({name, removeWidget}) => {

    const [menu, setMenu] = useState(false)

    const toggleWidgetMenu = () => {
        setMenu(!menu)
    }

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
                    <div className="container-more" onClick={toggleWidgetMenu}>
                        <div className={`widget-menu ${menu ? "widget-menu-" : ""}`}>
                            <div className="widget-menu-opt" onClick={removeWidget}>Delete</div>
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
