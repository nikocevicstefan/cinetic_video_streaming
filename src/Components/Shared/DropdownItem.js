import React from 'react';

const DropdownItem = (props) => {
    const {shown, hidden} = props;
    return (
        <div className="dropdown-item">
            <h3 className="dropdown-item__shown">{shown}</h3>
            <p className="dropdown-item__hidden">{hidden}</p>
        </div>
    );
};

export default DropdownItem;
