import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__toggler">
                <i>X</i>
            </div>
            <div className="sidebar__logo">
                <h1>Cinetic.</h1>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__item"><NavLink activeClassName="active" className="sidebar__link" to="/">Home</NavLink></li>
                <li className="sidebar__item"><NavLink activeClassName="active" className="sidebar__link" to="/movies">Movies</NavLink></li>
                <li className="sidebar__item"><NavLink activeClassName="active" className="sidebar__link" to="/tv-shows">TV Shows</NavLink></li>
                <li className="sidebar__item"><NavLink activeClassName="active" className="sidebar__link" to="/about-us">About Us</NavLink></li>
                <li className="sidebar__item"><NavLink activeClassName="active" className="sidebar__link" to="/contact-us">Contact</NavLink></li>
                <li className="sidebar__item"><NavLink activeClassName="active" className="sidebar__link" to="/faq">FAQ</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;
