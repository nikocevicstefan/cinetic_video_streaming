import React from 'react';
import ActionButton from "../../Shared/ActionButton";

const Register = () => {
    return (
        <div className="register-page">
            <h1 className="register-page__title">Register</h1>
            <div className="register-page__card">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                </div>
                <div className="register-page__button">
                    <ActionButton text='Submit'/>
                </div>
            </div>
        </div>
    );
};

export default Register;
