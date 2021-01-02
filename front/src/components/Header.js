import AuthService from "../services/auth.service";
import React, {useState} from "react";


const Header = ({currentUser}) => {

    const [showMenu, setShowMenu] = useState(false);
    const [day, setDay] = useState(true);

    const switchDay = () => {
        document.body.classList.toggle("theme-d")
        setDay(!day);
    }

    const menu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={`${!currentUser ? "login" : ""}`}>
            <div className="header-menu"/>

            <div className="header-title"><h1>My Dashboard</h1></div>

            <div className="day-night day-night3" onClick={switchDay}>
                <div className={`day-night-toggle ${day ? "day-night-toggle-off" : ""}`}/>
            </div>
            {currentUser &&
            <div className="header-user">
                <div className="header-user-wrapper" onClick={menu}>
                    <p>Hello {currentUser.username}</p>
                    <div className="header-user-pfp"/>

                    <div className={`menu-dropdown ${showMenu ? "menu-dropdown-on" : ""}`}>
                        <a className="menu-list" onClick={AuthService.logout} href="/login"
                           id="disconnection">Déconnexion</a>
                    </div>
                </div>
            </div>
            }
        </header>
    )
};
export default Header;
