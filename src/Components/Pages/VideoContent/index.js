import React, {useEffect} from 'react';
import GridImage from '../../../assets/img/movie10.jpg';
import ContentItem from "./ContentItem";
import {fetchMovies, selectMovie} from "../../../actions/movieAction";
import {connect} from "react-redux";
import {fetchFaqs} from "../../../actions/faqAction";
import ContentGrid from "../../Shared/ContentGrid";
import ContentPreview from "../../Shared/ContentPreview";

const VideoContent = (props) => {
    let {movies, movie, fetchMovies, selectMovie} = props;
    useEffect(() => {
        fetchMovies();
    }, [])


    return (
        <div className="video-content">
            <ContentPreview content={movie}/>
            <ContentGrid content={movies}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    movie: state.movie.movie
});


export default connect(mapStateToProps, {fetchMovies})(VideoContent);

