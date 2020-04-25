import React from 'react';
import {connect} from 'react-redux';
import ActionButton from "Components/Shared/ActionButton";
import {useField} from "Hooks";
import {register} from "actions/userAction";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = (props) => {

    const {register} = props;

    const [name, setName] = useField('');
    const [email, setEmail] = useField('');
    const [password, setPassword] = useField('');

    const clearFields = (e) => {
        setName(e, true);
        setEmail(e, true);
        setPassword(e, true);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password
        };

        register(userData);
        clearFields();
    }

    return (
        <div className="register-page">
            <h1 className="register-page__title">Register</h1>
            <form className="register-page__card">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" onChange={setName} value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={setEmail} value={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={setPassword} value={password}/>
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
