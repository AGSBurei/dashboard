import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import AuthService from "../../services/auth.service";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import nullImage from "../../assets/imgs/null.png"
import Header from "../../components/Header";
import Axios from "axios";
import param from "../../param";

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
    });
    const [quote, setQuote] = useState([
        "Don't have an account?",
        "Create your account!"
    ])

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            history.push("/board");
        }
    }, [history])

    const login = () => {
        AuthService.login(authInfo.username, authInfo.password).then(data => {
            if (data.error) {
                if (data.error === "activated") {
                    setError(data.message);
                }
            } else {
                console.log("connection data:", data);
                setError("");
                history.push("/board");
            }
        }).catch((err) => {
            console.log(err);
            setError('Incorrect connection information')
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
        const name = event.target.name
        const value = event.target.value;
        setAuthInfo({...authInfo, [name]: value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
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

    };

    const onSuccess = (response) => {
        console.log(response);
        const idTokenString = response.tokenId
        const params = new FormData();
        params.append("idTokenString", response.tokenId);
        Axios.post(param.oauth, {idTokenString}).then((resp) => {
            console.log(resp);
            if (resp.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(resp.data));
                setError("");
                history.push("/board");
            } else {
                setSuccess(resp.data.message);
                setTimeout(() => {
                    setInscription(false);
                    toggleInscription();
                }, 1000)
            }
        })
    };

    const onFailure = (response) => {
        console.log(response)
    };

    return (
        <div className="bg">
            {/*<!-----Header------>*/}
            <Header/>
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
                                       type="password"
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
                                <input className="c-form-input c2" type="password" name="passwordConfirm"
                                       onKeyUp={onFormChange} id="mdp"
                                       placeholder="confirm password"/>
                                <div className="c-error-zone" id="error-mdp2">
                                    Error mdp2
                                </div>
                            </div>

                            {error !== "" && (<div className="error">
                                {error}
                            </div>)}
                            {success !== "" && (<div className="success">
                                success : {success}
                            </div>)}

                            <button type="submit" className="c-form-button" onClick={(event) => onSubmit(event)}>
                                {inscription ? "Inscription" : "Connection"}
                            </button>
                        </form>
                        {/*<img src={nullImage} alt="Computer Man" className="c-notif"/>*/}
                    </div>

                    <div className="c-form-block2">
                        <p>-or connect with-</p>
                        {/*<div className="c-OOT c-Google"/>*/}
                        <GoogleLogin
                            clientId={"133786515991-vhbm4fi2p6cru5o0sn5ss9aajsmmfpi8.apps.googleusercontent.com"}
                            onSuccess={onSuccess} onFailure={onFailure}
                        />
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
