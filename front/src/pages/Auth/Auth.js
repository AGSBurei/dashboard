import React, {useState, useEffect} from "react";

import UserService from "../../services/user.service";

const Auth = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <div>
            {/*<!-----Header------>*/}
            <header className="">

                <div className="day-night day-night2" onClick="switch_()">
                    <div className="day-night-toggle"/>
                </div>

            </header>
            {/*<!-----Main------>*/}
            <main className="">
                <div className="c-main-block">
                    <div className="c-form-header">
                        <h1 className="c-form-title1">Login</h1>
                        <h1 className="c-form-title2">Create Account</h1>
                    </div>
                    <div className="c-form-header2">
                        <p className="c-form-quote1">Don't have an account?
                            <span className="c-span" onClick="inscription()">Create your account!</span>
                        </p>
                        <p className="c-form-quote2">Already have an account?
                            <span className="c-span" onClick="inscription()">Log in with your account!</span>
                        </p>
                    </div>
                    <div className="c-form-block t">
                        <form className="c-form">
                            <div className="c-form-hide">
                                <input className="c-form-input c2" type="email" name="email" placeholder="eMail"/>
                            </div>
                            <input className="c-form-input c1" type="text" name="pseudo" placeholder="Name" />

                                <input className="c-form-input c1" type="text" name="mdp" id="mdp"
                                       placeholder="password"/>
                                <div className="c-form-hide">
                                    <input className="c-form-input c2" type="text" name="mdp" id="mdp"
                                           placeholder="confirm password"/>
                                </div>

                                <div className="c-checkbox-zone">
                                    <div className="c-checkbox" onClick="checkbox()"/>
                                    <p className="c-checkbox-txt">
                                        Stay connected
                                    </p>
                                </div>
                                <input type="checkbox" className="c-checkbox-inp"/>
                                <button className="c-form-button">
                                    Connection
                                </button>
                        </form>
                    </div>

                    <div className="c-form-block2">
                        <p>-or connect with-</p>
                        <div className="c-OOT c-Google"/>
                        <div className="c-OOT c-Twitter"/>
                    </div>
                    <div className="c-form-footer">
                        <h6>A WebApp created par des beaux gosses</h6>
                    </div>

                </div>
            </main>
            {/*<!-----Footer------>*/}
            <footer />
        </div>
);
};

export default Auth;
