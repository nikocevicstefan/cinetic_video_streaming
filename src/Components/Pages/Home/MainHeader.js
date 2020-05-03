import React, {useEffect, useState} from 'react';
import ActionButton from "Components/Shared/ActionButton";
import HeaderImg from "assets/img/header2.jpg"
import HeaderImgVertical from "assets/img/header2.jpg"
import {Link} from "react-router-dom";

const MainHeader = () => {

    const [user, setUser] = useState(null);

    useEffect(function fetchUser() {
        const loggedInUser = window.localStorage.getItem('loggedInUser');
        setUser(JSON.parse(loggedInUser));
    }, []);

    return (
        <div className="main-header">
            <div className="main-header__content">
                <div className="main-header__logo--mobile">
                    <h1>Cinetic.</h1>
                </div>
                <div className="main-header__text">
                    <h1 className="main-header__title">Unlimited movies, TV shows, and more.</h1>
                    <p className="main-header__subtext">The main streaming service for your favorite content</p>
                    <div className="main-header__cta">
                        {!user &&
                        <Link to='/register'>
                            <ActionButton text="Subscribe"/>
                        </Link>
                        }
                        <Link to={user ? '/movies' : '/register'}>
                            <ActionButton text="Watch Now" classes="action-button--accent"/>
                        </Link>
                    </div>
                </div>
                <div className="main-header__img">
                    <img src={HeaderImg} srcSet={`${HeaderImg} 1800w, ${HeaderImgVertical} 1024w`}
                         sizes="(max-width: 1024px) 1024px" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
