import React from 'react';

const ContentItem = (props) => {
    const {img} = props;
    return (
        <div className="content-item">
            <img src={img} alt=""/>
        </div>
    );
};

export default ContentItem;
