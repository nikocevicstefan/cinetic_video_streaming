import React from 'react';
import ActionButton from "Components/Shared/ActionButton";
import {connect} from 'react-redux';
import {useField} from "Hooks";
import {login} from "actions/userAction";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
    const {login} = props;
    const [email, setEmail] = useField('');
    const [password, setPassword] = useField('');

    const clearFields = (e) => {
        setEmail(e, true);
        setPassword(e, true);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        const loginData = {
            email: email,
            password: password
        }
        login(loginData);
        clearFields(e);
    }

    return (
        <div className="login-page">
            <h1 className="login-page__title">Login</h1>
            <div className="login-page__card">
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={setEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={setPassword}/>
                </div>
                <div className="login-page__button" onClick={loginHandler}>
                    <ActionButton text='Submit'/>
                </div>
            </div>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};

export default connect(null,{login})(Login);
