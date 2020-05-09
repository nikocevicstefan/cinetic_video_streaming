import React from 'react';
import Loading from "../../Shared/Loading";
import ShowPreview from "../../Shared/ShowPreview";
import {connect} from 'react-redux'
import Header from 'assets/img/header2.jpg'

const SingleTVShow = (props) => {
    const {show, loading} = props;
    const headerImg = `http://image.tmdb.org/t/p/original/${show.backdrop_path ? show.backdrop_path : show.poster_path}`
    return (
        <div className="single-show">
            <div className="single-show__header" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)),url(${headerImg})`,}}>
                <h1 className="single-show__title">{show.name}</h1>
            </div>
            <div className="single-show__content">
                <div className="single-show__description">
                    <h1 className="single-show__description__heading">Description</h1>
                    <p className="single-show__description__text">{show.overview}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    show: state.show.show,
    loading: state.app.loading
});

export default connect(mapStateToProps, {})(SingleTVShow);
