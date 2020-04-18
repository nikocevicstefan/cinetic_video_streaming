import React, {useEffect} from 'react';
import MainHeader from "./MainHeader";
import ContentShowcase from "./ContentShowcase";
import ShowcaseImageMovie from '../../../assets/img/movie10.jpg';
import ShowcaseImageShow from '../../../assets/img/tvshow6.jpg';
import FaqList from "./FaqList";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchFaqs} from "../../../actions/faqAction";


const Home = (props) => {
    const {faqs} = props;

    useEffect(()=>{
        props.fetchFaqs();
    }, [])

    return (
        <div className="homepage">
            <MainHeader />
            <ContentShowcase image={ShowcaseImageMovie}  heading="Movies" text="lorem ispum dolor sit amet"/>
            <ContentShowcase image={ShowcaseImageShow} heading="TV Shows" text="lorem ispum dolor sit amet" classes="content-showcase--reverse"/>
            <FaqList faqs={faqs}/>
        </div>
    );
};

const mapStateToProps = (state) =>({
    faqs: state.faq.faqs
});


export default connect(mapStateToProps, {fetchFaqs})(Home);
