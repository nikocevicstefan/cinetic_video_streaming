import React from 'react';
import ActionButton from "../../Shared/ActionButton";
import {Link} from "react-router-dom";
import {isAdmin, isPremium} from "../../../Helpers";


const ContentShowcase = (props) => {
    const {classes, image, heading, text, link, onclick, type} = props;
    return (
        <div className={`content-showcase ${classes}`}>
            <div className="content-showcase__image">
                <img src={image} alt=""/>
            </div>
            <div className="content-showcase__text">
                <h1 className="content-showcase__heading">{heading}</h1>
                <p className="content-showcase__subtext">{text}</p>
                <div className="content-showcase__button">
                    {
                        type === 'movie'
                            ? (<Link to={link}>
                                <ActionButton text="Browse" classes="action-button--color-reverse"/>
                            </Link>)
                            : (isPremium() || isAdmin())
                                ? (
                                    <Link to={link}>
                                        <ActionButton text="Browse" classes="action-button--color-reverse"/>
                                    </Link>
                                ) : (
                                    <ActionButton text="Browse" classes="action-button--color-reverse" onclick={onclick}/>
                                )
                    }
                </div>
            </div>
        </div>
    );
};

export default ContentShowcase;
