import axios from 'axios';
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {DELETE_USER, GET_USERS, REGISTER, SET_PREMIUM, UPDATE_USER} from "./types";
import {getToken} from "../Helpers";

const axiosConfig = {headers: {'Content-Type': 'application/json'}}
const base_user_url = 'http://localhost:5000/users';
export const register = (userData) => async dispatch => {
    try {
        const {data} = await axios.post(`${base_user_url}/register`, {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: userData.role,
            subscription: userData.subscription
        }, axiosConfig);
        toast.success(`User Registered:${data.user.name}`);

        const loggedIn = JSON.parse(window.localStorage.getItem('loggedInUser'));
        !loggedIn && setTimeout(() => {
            window.location.replace('/login');
        }, 2000);

        dispatch({
            type: REGISTER,
            payload: data.user
        })
    } catch (e) {
        toast.warn('Registration failed');
    }
}

export const login = (loginData) => async dispatch => {
    try {
        const {data: user} = await axios.post(`${base_user_url}/authenticate`,
            {
                email: loginData.email,
                password: loginData.password
            }, axiosConfig);

        window.localStorage.setItem(
            'loggedInUser', JSON.stringify(user.data)
        )

        toast.success('Login Successful!');

        setTimeout(() => {
            window.location.replace('/');
        }, 2000);
    } catch (e) {
        toast.warn('Login Failed!');
    }

    const loggedInUser = window.localStorage.getItem('loggedInUser');
}

export const getAllUsers = () => async (dispatch) => {
    const users = await axios.get(`${base_user_url}/all`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer' + getToken()
        }
    });

    dispatch({
        type: GET_USERS,
        payload: users.data.users
    })
}

export const deleteUser = (userId) => async (dispatch) => {
    const {user: {id: authId}} = JSON.parse(window.localStorage.getItem('loggedInUser'));
    if (userId === authId) {
        toast.warn('Cant delete self!');
        return;
    }
    try {
        const {data} = await axios.delete(`${base_user_url}/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer' + getToken()
            }
        });

        dispatch({
            type: DELETE_USER,
            payload: userId
        });
        toast.success(`User Removed:${data.user.name}`);
    } catch (e) {
        toast.warn('Operation Failed!');
    }
};

export const buyPremiumPlan = (userId) => async dispatch => {
    try {
        const {data} = await axios.put(`${base_user_url}/${userId}`, {subscription: 'premium'},
            { headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer' + getToken()
            }});
        let loggedInUser = JSON.parse(window.localStorage.getItem('loggedInUser'));
        loggedInUser.user.subscription = 'premium';
        window.localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        dispatch({type: SET_PREMIUM});
        toast.success(`You are now a premium user ${data.user.name}`);
    } catch (e) {
        toast.warn('Operation Failed!');
    }
}