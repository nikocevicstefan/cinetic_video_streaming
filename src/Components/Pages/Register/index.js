import React, {useState} from 'react';
import {connect} from 'react-redux';
import ActionButton from "Components/Shared/ActionButton";
import {useField} from "Hooks";
import {register} from "actions/userAction";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {isValidEmail} from "../../../Helpers";

const Register = (props) => {

    const {register} = props;

    const [name, setName] = useField('');
    const [nameError, setNameError] = useState('');

    const [email, setEmail] = useField('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useField('');
    const [passwordError, setPasswordError] = useState('');

    const [passwordConfirmation, setPasswordConfirmation] = useField('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

    const resetErrors = () => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setPasswordConfirmationError('');
    }

    const validateData = () => {
        let isValid = true;
        resetErrors();
        if (name.length < 2) {
            setNameError('*Name must be at least 2 characters long');
            isValid = false;
        }
        if (!isValidEmail(email)) {
            setEmailError('*Invalid Email format');
            isValid = false;
        }
        if (password.length < 6) {
            setPasswordError('*Password must be at least 6 chars long');
            isValid = false;
        }
        if (passwordConfirmation !== password) {
            setPasswordConfirmationError('*Password confirmation must be the same as password');
            isValid = false;
        }
        return isValid;
    }

    const clearFields = (e) => {
        setName(e, true);
        setEmail(e, true);
        setPassword(e, true);
        setPasswordConfirmation(e, true);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            email: email,
            password: password,
            role: 'client',
            subscription: 'default'
        };

        if (validateData()) {
            register(userData);
            clearFields();
        }
    }

    return (
        <div className="register-page">
            <h1 className="register-page__title">Register</h1>
            <form className="register-page__card">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" onChange={setName} value={name} required/>
                    {nameError && <p>{nameError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={setEmail} value={email} required/>
                    {emailError && <p>{emailError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={setPassword} value={password} required/>
                    {passwordError && <p>{passwordError}</p>}

                </div>
                <div className="form-group">
                    <label htmlFor="">Password Confirmation</label>
                    <input type="password" name="password" onChange={setPasswordConfirmation}
                           value={passwordConfirmation} required/>
                    {passwordConfirmationError && <p>{passwordConfirmationError}</p>}
                </div>
                <div className="register-page__button" onClick={handleFormSubmit}>
                    <ActionButton text='Submit'/>
                </div>
            </form>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};

export default connect(null, {register})(Register);
