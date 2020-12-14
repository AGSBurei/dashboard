import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import AuthService from "../../services/auth.service";

import nullImage from "../../assets/imgs/null.png"

const Auth = ({switchDay}) => {
    const history = useHistory()

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [inscription, setInscription] = useState(false)
    const [authInfo, setAuthInfo] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })
    const [quote, setQuote] = useState([
        "Don't have an account?",
        "Create your account!"
    ])

    const login = () => {
        AuthService.login(authInfo.username, authInfo.password).then(data => {
            console.log("connection data:", data)
            history.push("/board");
        })
    }
    const register = async () => {
        if (isErrors()) return false;
        await AuthService.register(authInfo.username, authInfo.email, authInfo.password).then(data => {
            console.log("inscription data:", data)
            return true;
        })
    }

    const isErrors = () => {
        if (inscription) {
            if (authInfo.password !== authInfo.passwordConfirm) {
                setError("Passwords does not match")
                return true;
            }

            if (authInfo.email === "") { // TODO: REGEX email
                setError("Not a valid email")
                return true;
            }
        }

        setError("");
        return false
    }

    const onFormChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setAuthInfo({...authInfo, [name]: value})
    };

    const onSubmit = () => {
        if (inscription) {
            const isRegistered = register();
            if (isRegistered) {
                setSuccess("User successfully registered");
                //bru
                setTimeout(function () {
                    toggleInscription();
                    setSuccess("User successfully registered")
                }, 2000)
            }

        } else {
            login()
        }
        console.log(authInfo)
    };

    const toggleInscription = () => {
        if (inscription) {
            setQuote([
                "Don't have an account?",
                "Create your account!"
            ])
        } else {
            setQuote([
                "Already have an account?",
                "Log in with your account!"
            ])
        }
        setInscription(!inscription)

    }

    return (
        <div className="bg">
            {/*<!-----Header------>*/}
            <header className="">
                <div className="header-menu"/>

                <div className="header-title"/>

                <div className="day-night day-night2" onClick={switchDay}>
                    <div className="day-night-toggle"/>
                </div>
            </header>
            {/*<!-----Main------>*/}
            <main className="">
                <div className="c-main-block">
                    <div className="c-form-header">
                        <h2 className={`c-form-title1 ${inscription ? "c-form-title1-" : ""}`}>Login</h2>
                        <h2 className={`c-form-title2 ${inscription ? "c-form-title2-" : ""}`}>Create Account</h2>
                    </div>
                    <div className="c-form-header2">
                        <p className="c-form-quote">{quote[0]}
                            <span className="c-span" onClick={toggleInscription}> {quote[1]}</span>
                        </p>
                    </div>
                    <div className="c-form-block t">
                        <form className={`c-form ${inscription ? " inscription" : ""}`}>
                            <div className="c-form-input-wrapper">
                                <input className="c-form-input" type="email" name="email" onKeyUp={onFormChange}
                                       placeholder="eMail"/>
                                <div className="c-error-zone" id="error-mail">Not a valid email</div>
                            </div>

                            <div>
                                <input className="c-form-input" type="text" name="username" onKeyUp={onFormChange}
                                       placeholder="Name"/>
                                <div className="c-error-zone" id="error-name">Error pseudo</div>
                            </div>

                            <div>
                                <input className="c-form-input"
                                       type="text"
                                       name="password"
                                       onKeyUp={onFormChange}
                                       id="mdp"
                                       placeholder="password"
                                />
                                <div className="c-error-zone" id="error-mdp">
                                    Error mdp
                                </div>
                            </div>

                            <div className="c-form-input-wrapper">
                                <input className="c-form-input c2" type="text" name="passwordConfirm"
                                       onKeyUp={onFormChange} id="mdp"
                                       placeholder="confirm password"/>
                                <div className="c-error-zone" id="error-mdp2">
                                    Error mdp2
                                </div>
                            </div>

                            {error !== "" && (<div className="error">
                                error : {error}
                            </div>)}
                            {success !== "" && (<div className="success">
                                success : {success}
                            </div>)}

                            <div className="c-form-input-wrapper-connection">
                                <div className="c-checkbox-zone">
                                    <div className="c-checkbox"
                                         onClick={(event) => event.target.classList.toggle("c-checkbox-")}/>
                                    <p className="c-checkbox-txt">Stay connected</p>
                                </div>
                                <input type="checkbox" className="c-checkbox-inp"/>
                            </div>
                        </form>
                        <button type="button" className="c-form-button" onClick={onSubmit}>
                            {inscription ? "Inscription" : "Connection"}
                        </button>
                        <img src={nullImage} alt="Computer Man" className="c-notif"/>
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
            <footer className="">

            </footer>
        </div>
    );
};

export default Auth;
