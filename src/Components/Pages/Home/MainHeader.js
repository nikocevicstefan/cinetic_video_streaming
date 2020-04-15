import React from 'react';

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="main-header__content">
                <div className="main-header__text">
                    <h1 className="main-header__title">Obelius</h1>
                    <p className="main-header__subtext">The main streaming service for your favorite content</p>
                    <div className="main-header__cta">
                        <button>Subscribe</button>
                        <button>Watch now</button>
                    </div>
                </div>
                <div className="main-header__img">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
