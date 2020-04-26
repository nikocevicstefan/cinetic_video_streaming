import React from 'react';

const MyComponent = (props) => {
    return (
        <div className='page-wrapper'>
            {props.children}
        </div>
    );
};

export default MyComponent;
