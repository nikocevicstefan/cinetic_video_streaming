import React from 'react';
import {connect} from 'react-redux';
import VideoPlayer from "Components/Shared/VideoPlayer";
import {fetchMovieTrailer} from "actions/movieAction";
import ContentDetails from "./ContentDetails";

const MoviePreview = (props) => {
    const {content, movieTrailer, movieTrailerPlaying,} = props;

    return (
        <div className="content-preview">
            {movieTrailerPlaying
                ? <VideoPlayer id={content.id} trailer={movieTrailer} type="movie"/>
                : <ContentDetails content={content} type="movie"/>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    movieTrailer: state.movie.trailer,
    movieTrailerPlaying: state.movie.trailerPlaying,
})

export default connect(mapStateToProps, {fetchMovieTrailer})(MoviePreview);
