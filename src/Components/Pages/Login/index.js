import React from 'react';
import ActionButton from "../../Shared/ActionButton";

const Register = () => {
    return (
        <div className="login-page">
            <h1 className="login-page__title">Login</h1>
            <div className="login-page__card">
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                </div>
                <div className="login-page__button">
                    <ActionButton text='Submit'/>
                </div>
            </div>
        </div>
    );
};

export default Register;
