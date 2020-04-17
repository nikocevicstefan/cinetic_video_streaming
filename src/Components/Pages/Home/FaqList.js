import React from 'react';
import DropdownItem from "../../Shared/DropdownItem";

const FaqList = () => {
    return (
        <div className="faq-list">
            <div className="faq-list__title">
                <h1>FAQ</h1>
            </div>
            <div className="faq-list__item">
                <DropdownItem shown="Pitanje je ovo" hidden="Odgovor je ovo"/>
            </div>
            <div className="faq-list__item">
                <DropdownItem shown="Pitanje je ovo" hidden="Odgovor je ovo"/>
            </div>
            <div className="faq-list__item">
                <DropdownItem shown="Pitanje je ovo" hidden="Odgovor je ovo"/>
            </div>
            <div className="faq-list__item">
                <DropdownItem shown="Pitanje je ovo" hidden="Odgovor je ovo"/>
            </div>
            <div className="faq-list__item">
                <DropdownItem shown="Pitanje je ovo" hidden="Odgovor je ovo"/>
            </div>
        </div>
    );
};

export default FaqList;
