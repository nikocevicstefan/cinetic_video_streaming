import React from 'react';
import ActionButton from "./ActionButton";
import dummyImage from '../../assets/img/movie10.jpg';

const ContentPreview = (props) => {
    const {content} = props;
    return (
        <div className="content-preview">
            <div className="content-preview__text">
                <div className="content-preview__logo--mobile">
                    <h1>Cinetic.</h1>
                </div>
                <h1 className="content-preview__title">{content.name ? content.name: content.title}</h1>
                <div className="content-preview__description">{content.overview}
                </div>
                <div className="content-preview__cta">
                    <ActionButton text="Play"/>
                </div>
            </div>
            <div className="content-preview__img">
                <img src={`http://image.tmdb.org/t/p/original/${content.backdrop_path ? content.backdrop_path : content.poster_path}`} alt=""/>
            </div>
        </div>
    );
};

export default ContentPreview;
