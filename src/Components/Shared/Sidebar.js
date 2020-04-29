import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import openSidebar from '../../assets/img/icons/right.svg'
import closeSidebar from '../../assets/img/icons/back.svg'

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(function fetchUser() {
        const loggedInUser = window.localStorage.getItem('loggedInUser');
        setUser(JSON.parse(loggedInUser));
    }, []);

    const logoutHandler = () => {
        window.localStorage.removeItem('loggedInUser');
        setUser(null);
        window.location.replace('/');
    }
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <div className={`sidebar ${sidebar && 'opened'}`} onClick={toggleSidebar}>
            <div className="sidebar__toggler" onClick={toggleSidebar}>
                <img src={sidebar ? closeSidebar : openSidebar} alt="sidebar toggler"/>
            </div>
            <div className="sidebar__logo">
                <h1>Cinetic.</h1>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__item"><NavLink exact activeClassName="active" className="sidebar__link"
                                                       to="/">Home</NavLink></li>
                {user && <li className="sidebar__item"><NavLink exact activeClassName="active" className="sidebar__link"
                                                                to="/movies">Movies</NavLink></li>}
                {user && <li className="sidebar__item"><NavLink exact activeClassName="active" className="sidebar__link"
                                                                to="/tv-shows">TV Shows</NavLink></li>}
                <li className="sidebar__item"><NavLink exact activeClassName="active" className="sidebar__link"
                                                       to="/about-us">About Us</NavLink></li>
                <li className="sidebar__item"><NavLink exact activeClassName="active" className="sidebar__link"
                                                       to="/faq">FAQ</NavLink></li>
                {!user &&
                <li className="sidebar__item"><NavLink exact activeClassName="active" className="sidebar__link"
                                                       to="/login">Login</NavLink></li>}
                {!user &&
                <li className="sidebar__item"><NavLink exact activeClassName="active" className="sidebar__link"
                                                       to="/register">Register</NavLink></li>}
                {user && <li className="sidebar__item" onClick={logoutHandler} style={{cursor: "pointer"}}>Logout</li>}
            </ul>
        </div>
    );
};

export default Sidebar;
