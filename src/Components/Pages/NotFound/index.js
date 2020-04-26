import React from 'react';
import {Link} from "react-router-dom";
import ActionButton from "Components/Shared/ActionButton";

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="not-found__content">
                <h1 className='not-found__title'>404</h1>
                <p className="not-found__text">Page Not Found</p>
                <div className="not-found__button">
                    <Link to='/'>
                        <ActionButton text='Back to home'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
