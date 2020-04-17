import React from 'react';

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
                <li className="sidebar__item"><a className="sidebar__link" href="">Movies</a></li>
                <li className="sidebar__item"><a className="sidebar__link" href="">TV Shows</a></li>
                <li className="sidebar__item"><a className="sidebar__link" href="">About Us</a></li>
                <li className="sidebar__item"><a className="sidebar__link" href="">Contact</a></li>
                <li className="sidebar__item"><a className="sidebar__link" href="">FAQ</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
