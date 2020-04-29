import React from 'react';
import {connect} from 'react-redux';
import VideoPlayer from "Components/Shared/VideoPlayer";
import {fetchMovieTrailer} from "actions/movieAction";
import {fetchShowTrailer} from "actions/tvshowAction";
import ContentDetails from "./ContentDetails";

const ContentPreview = (props) => {
    const {
        content, movieTrailer, showTrailer,
        movieTrailerPlaying, showTrailerPlaying
    } = props;

    return (
        <div className="content-preview">
            {movieTrailerPlaying
                ? <VideoPlayer id={content.id} trailer={movieTrailer}/>
                : <ContentDetails content={content}/>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    movieTrailer: state.movie.trailer,
    showTrailer: state.show.trailer,
    movieTrailerPlaying: state.movie.trailerPlaying,
    showTrailerPlaying: state.show.trailerPlaying
})

export default connect(mapStateToProps, {fetchMovieTrailer, fetchShowTrailer})(ContentPreview);
