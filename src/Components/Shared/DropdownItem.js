import React, {useState} from 'react';

const DropdownItem = (props) => {
    const toggleDropdown = (e) => {e.target.nextSibling.classList.toggle('false');};

    const {shown, hidden} = props;
    return (
        <div className="dropdown-item">
            <h3 className="dropdown-item__shown" onClick={toggleDropdown}>{shown}</h3>
            <p className="dropdown-item__hidden">{hidden}</p>
        </div>
    );
};

export default DropdownItem;
