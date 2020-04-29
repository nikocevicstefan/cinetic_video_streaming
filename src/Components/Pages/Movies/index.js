import React, {useEffect} from 'react';
import {fetchMovieGenres, fetchMovies} from "actions/movieAction";
import {connect} from "react-redux";
import ContentGrid from "Components/Shared/ContentGrid";
import FilterContent from "Components/Shared/FilterContent";
import MoviePreview from "../../Shared/MoviePreview";

const Movies = (props) => {

    let {
        movies, filtered, genres,
        movie, fetchMovies, fetchMovieGenres
    } = props;

    useEffect(() => {
        fetchMovies();
        fetchMovieGenres();
    }, [])

    return (
        <div className="video-content">
            <MoviePreview content={movie}/>
            <FilterContent genres={genres} type="movie"/>
            <ContentGrid content={filtered ? filtered : movies}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movie.movies,
    filtered: state.movie.filtered,
    genres: state.movie.genres,
    movie: state.movie.movie
});


export default connect(mapStateToProps, {fetchMovies, fetchMovieGenres})(Movies);

