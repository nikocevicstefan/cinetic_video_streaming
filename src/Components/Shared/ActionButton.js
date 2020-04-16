import React from 'react';

const ActionButton = (props) => {
    const {text} = props;
    return (
        <button className="action-button">{text}</button>
    );
};

export default ActionButton;
