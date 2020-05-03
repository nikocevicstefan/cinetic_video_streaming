import React from 'react';
import ActionButton from "./ActionButton";
import {connect} from 'react-redux';
import {fetchMovieTrailer, toggleMoviePlayer} from "actions/movieAction";
import {fetchShowTrailer, toggleShowPlayer} from "actions/tvshowAction";
import HeaderImage from 'assets/img/header2.jpg'

const ContentDetails = (props) => {

    const {
        content, type, toggleMoviePlayer, loading,
        movieTrailer, toggleShowPlayer, showTrailer,
    } = props;
    const playTrailerHandler = () => type === 'movie' ? toggleMoviePlayer() : toggleShowPlayer();
    return (
        <>
            <div className="content-preview__text">
                <div className="content-preview__logo--mobile">
                    <h1>Cinetic.</h1>
                </div>
                <h1 className="content-preview__title">{content.name ? content.name : content.title}</h1>
                <div className="content-preview__description">{content.overview}
                </div>
                {
                    (type === 'movie' && movieTrailer) || (type === 'show' && showTrailer)
                        ? <div className="content-preview__cta">
                            <ActionButton text="Play" onclick={playTrailerHandler}/>
                        </div>
                        :
                        <div className="content-preview__cta">
                            <ActionButton text="No trailer available" disabled={true}/>
                        </div>
                }
            </div>
            <div className="content-preview__img">
                <img
                    src={`http://image.tmdb.org/t/p/original/${content.backdrop_path ? content.backdrop_path : content.poster_path}`}
                    alt=""/>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    movieTrailer: state.movie.trailer,
    showTrailer: state.show.trailer,
    loading: state.app.loading,
})

export default connect(mapStateToProps, {
    toggleMoviePlayer,
    fetchMovieTrailer,
    toggleShowPlayer,
    fetchShowTrailer
})(ContentDetails);
