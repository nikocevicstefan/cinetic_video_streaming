import React, {useEffect} from 'react';
import {fetchMovieGenres, fetchMovies} from "actions/movieAction";
import {connect} from "react-redux";
import ContentGrid from "Components/Shared/ContentGrid";
import FilterContent from "Components/Shared/FilterContent";
import MoviePreview from "../../Shared/MoviePreview";

const Movies = (props) => {

    let {
        movies, filtered, genres, page,
        movie, fetchMovies, fetchMovieGenres
    } = props;

    useEffect(() => {
        !filtered && fetchMovies(page);
    }, [page])

    useEffect(() => {
        fetchMovieGenres();
    }, [])

    return (
        <div className="video-content">
            <MoviePreview content={movie}/>
            <FilterContent genres={genres} type="movie"/>
            <ContentGrid content={filtered ? filtered : movies} type="movies"/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    filtered: state.movie.filtered,
    page: state.movie.page,
    genres: state.movie.genres,
    movie: state.movie.movie
});


export default connect(mapStateToProps, {fetchMovies, fetchMovieGenres})(Movies);

