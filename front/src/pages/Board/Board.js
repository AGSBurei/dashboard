import React, {useState, useEffect} from "react";
import { ReactSortable } from "react-sortablejs";


import UserService from "../../services/user.service";
import Widget from "../../components/Widget";

const Board = ({user, switchDay}) => {
    const [widgets, setWidgets] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        console.log("load", user)
        // switchDay()

        setWidgets([...Array(12)].map((e, i) => <Widget name={"Widget " + i} key={Math.random()}>♦</Widget>))
    }, [switchDay, user]);

    const renderWidgets = () => {
        return (
            <ReactSortable
                className="main-container"
                list={widgets}
                setList={setWidgets}
                group="group"
                animation={200}
            >
                {widgets}
            </ReactSortable>
        )
    }

    const openMenu = () => {
        document.querySelector(".menu-dropdown").classList.toggle("menu-dropdown-on")
        setShowMenu(!showMenu);
    }

    return (
        <div className="bg">
            <header className="">
                <div className="header-menu"/>

                <div className="header-title"/>

                <div className="day-night day-night3" onClick={switchDay}>
                    <div className="day-night-toggle"/>
                </div>

                <div onClick={openMenu} className="header-user">
                    <p>Hello User 01</p>
                    <div className="header-user-pfp"/>
                    <div className="menu-dropdown">
                        <a className="menu-list" href="/login" id="disconnection">Déconnexion</a>
                    </div>
                </div>

            </header>
            {/*<!-----Main------>*/}
            <main className="">
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
