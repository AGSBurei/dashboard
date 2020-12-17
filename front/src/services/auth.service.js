import axios from "axios";
import param from "../param";



const register = (username, email, password) => {
    return axios.post(param.auth + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(param.auth + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
