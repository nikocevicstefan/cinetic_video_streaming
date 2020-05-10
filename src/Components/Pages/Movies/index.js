import React, {useEffect, useState} from 'react';
import {fetchMovieGenres, fetchMovies} from "actions/movieAction";
import {connect} from "react-redux";
import ContentGrid from "Components/Shared/ContentGrid";
import FilterContent from "Components/Shared/FilterContent";
import MoviePreview from "../../Shared/MoviePreview";
import Loading from "../../Shared/Loading";

const Movies = (props) => {
    let {
        movies, filtered, genres, page,
        movie, fetchMovies, fetchMovieGenres,
        loading, searched
    } = props;

    useEffect(() => {
        !filtered && fetchMovies(page);
    }, [page])

    useEffect(() => {
        fetchMovieGenres();
    }, [])

    return (
        <div className="video-content">
            {loading ? <div className="video-content__loading"><Loading/></div> : <MoviePreview content={movie}/>}
            <FilterContent genres={genres} type="movie"/>
            <ContentGrid content={searched ? searched : filtered ? filtered : movies} type="movies"/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    filtered: state.movie.filtered,
    searched: state.movie.searched,
    page: state.movie.page,
    genres: state.movie.genres,
    movie: state.movie.movie,
    loading: state.app.loading
});


export default connect(mapStateToProps, {fetchMovies, fetchMovieGenres})(Movies);

