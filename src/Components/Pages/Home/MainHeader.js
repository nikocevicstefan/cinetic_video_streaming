import React from 'react';
import ActionButton from "../../Shared/ActionButton";
import HeaderImg from "../../../assets/img/header2.jpg"

const MainHeader = () => {
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
                        <ActionButton text="Subscribe"/>
                        <ActionButton text="Watch Now" classes="action-button--accent"/>
                    </div>
                </div>
                <div className="main-header__img">
                    <img src={HeaderImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;