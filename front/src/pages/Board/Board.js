import React, {useState, useEffect} from "react";
import {ReactSortable} from "react-sortablejs";
import {useHistory} from "react-router-dom";
import Axios from "axios";

import AuthService from "../../services/auth.service";
import Widget from "../../components/Widgets/Widget";
import WidgetList from "../../components/WidgetList/WidgetList";
import authHeader from "../../services/auth-header";
import Header from "../../components/Header"
import param from "../../param";

const Board = () => {
    const history = useHistory();

    const [showWidgetList, setShowWidgetList] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        } else {
            history.push("/login");
        }

        getUserWidgets()
    }, [history]);

    const getUserWidgets = () => {
        Axios.get(param.widget.saveAccount, {headers: authHeader()})
            .then(res => {
                setWidgets(res.data)
            })
    };

    const renderWidgets = () => {
        if (widgets.length === 0 || widgets[widgets.length - 1] === null) return;
        return (
            <ReactSortable
                className="main-container"
                list={widgets}
                setList={setWidgets}
                group="group"
                animation={200}
                onEnd={saveWidgets}
            >
                {widgets.map((widget) => <Widget widget={widget} removeWidget={() => removeWidget(widget)}
                                                 key={widget.id}>♦</Widget>)}
            </ReactSortable>
        )
    };

    const removeWidget = (widget) => {
        Axios.post(param.widget.delete, widget, {headers: authHeader()})
            .then(() => {
                setWidgets(widgets.filter(widgetItem => widgetItem.id !== widget.id))
            })
    };

    const addWidget = (name, params = {}) => {
        Axios.post(param.widget.new, {
                name,
                params
            },
            {headers: authHeader()})
            .then((res) => {
                const newWidget = res.data;
                setWidgets([...widgets, newWidget])
            })
    };

    const toggleShowWidgetList = () => {
        setShowWidgetList(!showWidgetList)
    };

    const saveWidgets = () => {
        Axios.post(param.widget.saveAccount, {widgets}, {headers: authHeader()})
    };

    return (
        <div className="bg">
            <WidgetList isShow={showWidgetList} toggleShow={toggleShowWidgetList} addWidget={addWidget}/>

            <Header currentUser={currentUser}/>
            {/*<!-----Main------>*/}
            <main className="">

                <div className="main-block">
                    {renderWidgets()}
                </div>
                <button className="add-widget" onClick={toggleShowWidgetList}>Add</button>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Board;
