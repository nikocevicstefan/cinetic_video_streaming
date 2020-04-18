import React from 'react';

const ContentItem = ({movie}) => {
    return (
        <div className="content-item">
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
        </div>
    );
};

export default ContentItem;
