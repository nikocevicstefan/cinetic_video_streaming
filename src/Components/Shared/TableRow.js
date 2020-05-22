import React from 'react';
import ActionButton from "./ActionButton";

const TableRow = ({user, onclick}) => {
    const deleteUserHandler = () => {
        onclick(user.id);
    };
    return (
        <div className="table-row">
            <p>{user.email}</p>
            <p>{user.name}</p>
            <p>{user.role}</p>
            {/*<button>remove</button>*/}
            <ActionButton text="Remove" onclick={deleteUserHandler}/>
        </div>
    );
};

export default TableRow;