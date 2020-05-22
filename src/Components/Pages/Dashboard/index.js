import React, {useEffect, useState} from 'react';
import TableRow from "../../Shared/TableRow";
import {connect} from 'react-redux';
import {deleteUser, getAllUsers, register} from "../../../actions/userAction";
import {useField} from "../../../Hooks";
import ActionButton from "../../Shared/ActionButton";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = (props) => {

    const {register, users,
        getAllUsers, deleteUser} = props;

    const [name, setName] = useField('');
    const [email, setEmail] = useField('');
    const [password, setPassword] = useField('');
    const [newUser, toggleNewUser] = useState(false);

    const clearFields = (e) => {
        setName(e, true);
        setEmail(e, true);
        setPassword(e, true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password,
            role: 'admin'
        };

        register(userData);
        toggleNewUser(!newUser);
        clearFields();
    }


    useEffect(function getUsers(){
        getAllUsers();
    }, [newUser]);

    return (
        <div className="dashboard">
            <h1 className="dashboard__header">Dashboard</h1>
            <div className="dashboard__users">
                <div className="dashboard__table">
                    <h3 style={{marginBottom: '20px'}}>Users</h3>
                    <div className="table-row header">
                        <p>Email</p>
                        <p>Name</p>
                        <p>Role</p>
                        <p>Remove</p>
                    </div>
                    {
                        users.map(user =>{
                            return <TableRow user={user} key={user.id} onclick={deleteUser}/>
                        })
                    }
                </div>
                <div className="dashboard__form">
                    <h3>Add User</h3>
                    <form className="form__card">
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
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role">
                            <option value="client" selected>Client</option>
                            <option value="admin" selected>Admin</option>
                        </select>
                        </div>
                        <div className="register-page__button" onClick={handleFormSubmit}>
                            <ActionButton text='Submit'/>
                        </div>
                    </form>
                </div>
            </div>
            <h3>Stats</h3>
            <div className="dashboard__stats">
                <div className="dashboard__stats__card">
                    <p className="card__number">3231</p>
                    <p className="card__title">Movies</p>
                </div>
                <div className="dashboard__stats__card">
                    <p className="card__number">670</p>
                    <p className="card__title">Shows</p>
                </div>
                <div className="dashboard__stats__card">
                    <p className="card__number">102304</p>
                    <p className="card__title">Users</p>
                </div>
                <div className="dashboard__stats__card">
                    <p className="card__number">10M</p>
                    <p className="card__title">Minutes watched</p>
                </div>
            </div>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.user.users
})

export default connect(mapStateToProps, {register, getAllUsers, deleteUser})(Dashboard);