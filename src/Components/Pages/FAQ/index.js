import React, {useEffect} from "react";
import FaqList from "./FaqList";
import {connect} from "react-redux";
import {fetchFaqs} from "actions/faqAction";

const FAQ = (props) => {
    const {faqs} = props;

    useEffect(()=>{
        props.fetchFaqs();
    }, [])

    return (
        <div className="faq-page">
            <FaqList faqs={faqs}/>
        </div>
    );
};

const mapStateToProps = (state) =>({
    faqs: state.faq.faqs
});

export default connect(mapStateToProps, {fetchFaqs})(FAQ);


