import React from 'react';
import ContentItem from "./ContentItem";

const ContentGrid = (props) => {
    const {content} = props;
    return (
        content.length
            ? <div className="content-grid">
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
            : <h1 className="content-grid--empty">No content found</h1>
    );
};

export default ContentGrid;
