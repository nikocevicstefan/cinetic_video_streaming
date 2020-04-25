import React from 'react';
import DropdownItem from "Components/Shared/DropdownItem";
const FaqList = ({faqs}) => {
    return (
        <div className="faq-list">
            <div className="faq-list__title">
                <h1>FAQ</h1>
            </div>
            {
                faqs.map(faq => {
                    return(
                        <div className="faq-list__item" key={faq.id}>
                            <DropdownItem shown={faq.question} hidden={faq.answer}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default FaqList;
