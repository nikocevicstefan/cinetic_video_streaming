import React from 'react';
import ContentItem from "./ContentItem";

const ContentGrid = (props) => {
    const {content} = props;
    return (
        <div className="content-grid">
            {
                content.map(item => {
                    return (
                        <div className="content-grid__item" key={item.id}>
                            <ContentItem item={item}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ContentGrid;
