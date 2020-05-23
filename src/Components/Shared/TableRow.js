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
            {user.role === 'admin'
                ?<p><i className="fas fa-crown"></i> Admin</p>
                : user.subscription === 'default'
                    ?<p><i className="fas fa-star-half-alt"></i> Customer</p>
                    :<p><i className="fas fa-star"></i> Customer</p>
            }
            {/*<button>remove</button>*/}
            <ActionButton text="Remove" onclick={deleteUserHandler}/>
        </div>
    );
};

export default TableRow;