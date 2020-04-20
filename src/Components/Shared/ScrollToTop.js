import React from 'react';
import UpArrow from '../../assets/img/icons/up.svg';
const MyComponent = () => {
    const scrollToTop = () => window.scrollTo(0, 0);
    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            <img src={UpArrow} alt="back to top image"/>
        </div>
    );
};

export default MyComponent;
