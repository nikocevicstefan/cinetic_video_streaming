import axios from 'axios';
import {REGISTER, LOGIN, LOGOUT} from "./types";
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const axiosConfig = {headers: {'Content-Type': 'application/json'}}

export const register = (userData) => async dispatch => {
    try {
        const {data: user} = await axios.post('http://localhost:5000/users/register', {
            name: userData.name,
            email: userData.email,
            password: userData.password,
        }, axiosConfig);
        toast.success(`User Registered:${user.data.name}`);
    } catch (e) {
        toast.warn('Registration failed');
    }
}

export const login = (loginData) => async dispatch => {
    try {
        const {data: user} = await axios.post('http://localhost:5000/users/authenticate',
            {
                email: loginData.email,
                password: loginData.password
            }, axiosConfig);

        window.localStorage.setItem(
            'loggedInUser', JSON.stringify(user.data)
        )
        toast.success('Login Successful!');

        setTimeout(()=>{
            window.location.replace('/');
        }, 2000);
    } catch (e) {
        toast.warn('Login Failed!');
    }
}