import React, {useState, useEffect} from "react";
import {ReactSortable} from "react-sortablejs";
import {useHistory} from "react-router-dom";

import AuthService from "../../services/auth.service";
import Widget from "../../components/Widget";
import WidgetList from "../../components/WidgetList/WidgetList";

const WIDGETS_ARRAY = [
    {
        id: 1,
        type: "null"
    },{
        id: 2,
        type: "null"
    },{
        id: 3,
        type: "null"
    },{
        id: 4,
        type: "null"
    },{
        id: 5,
        type: "null"
    },{
        id: 6,
        type: "null"
    },{
        id: 7,
        type: "null"
    },
]

const Board = ({switchDay}) => {
    const history = useHistory()

    const [showWidgetList, setShowWidgetList] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [widgets, setWidgets] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        } else {
            history.push("/login");
        }
        setWidgets(WIDGETS_ARRAY)
    }, [history]);

    const renderWidgets = () => {
        return (
            <ReactSortable
                className="main-container"
                list={widgets}
                setList={setWidgets}
                group="group"
                animation={200}
            >
                {widgets.map((widget) => <Widget name={"Widget " + widget.id} removeWidget={() => removeWidget(widget.id)} key={widget.id}>♦</Widget>)}
            </ReactSortable>
        )
    }

    const openMenu = () => {
        document.querySelector(".menu-dropdown").classList.toggle("menu-dropdown-on")
        setShowMenu(!showMenu);
    }

    const removeWidget = (widgetId) => {
        setWidgets(widgets.filter(widget => widget.id !== widgetId))
    }

    const addWidget = () => {
        setWidgets([...widgets, {
            id: Math.random(),
            type: null
        }])
        toggleShowWidgetList()
    }

    const toggleShowWidgetList = () => {
        setShowWidgetList(!showWidgetList)
    }

    return (
        <div className="bg">
            <WidgetList isShow={showWidgetList} toggleShow={toggleShowWidgetList} addWidget={addWidget} />

            <header className="">
                <div className="header-menu"/>

                <div className="header-title"/>

                <div className="day-night day-night3" onClick={switchDay}>
                    <div className="day-night-toggle"/>
                </div>

                <div onClick={openMenu} className="header-user">
                    <p>Hello {currentUser.username}</p>
                    <div className="header-user-pfp"/>
                    <div className="menu-dropdown">
                        <a className="menu-list" onClick={AuthService.logout} href="/login"
                           id="disconnection">Déconnexion</a>
                    </div>
                </div>

            </header>
            {/*<!-----Main------>*/}
            <main className="">
                <button onClick={toggleShowWidgetList}>Add</button>
                <div className="main-block">
                    {renderWidgets()}
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Board;
