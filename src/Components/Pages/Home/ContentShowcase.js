import React from 'react';
import ActionButton from "../../Shared/ActionButton";
import {Link} from "react-router-dom";


const ContentShowcase = (props) => {
    const {classes, image, heading, text, link} = props;
    return (
        <div className={`content-showcase ${classes}`}>
            <div className="content-showcase__image">
                <img src={image} alt=""/>
            </div>
            <div className="content-showcase__text">
                <h1 className="content-showcase__heading">{heading}</h1>
                <p className="content-showcase__text">{text}</p>
                <div className="content-showcase__button">
                    <Link to={link}>
                    <ActionButton text="Browse"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContentShowcase;
