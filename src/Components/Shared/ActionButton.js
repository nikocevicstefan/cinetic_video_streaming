import React from 'react';

const ActionButton = (props) => {
    const {text, classes, onclick, disabled} = props;
    return (
        <button className={`action-button ${classes}`} disabled={disabled} onClick={onclick}>{text}</button>
    );
};

ActionButton.defaultProps = {}

export default ActionButton;
