import React from 'react';
import PropTypes from "prop-types";
const ActionButton = (props) => {
    const {text, classes} = props;
    return (
        <button className={`action-button ${classes}`}>{text}</button>
    );
};

ActionButton.defaultProps = {

}

export default ActionButton;
