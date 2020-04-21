import React, {useEffect} from 'react';
import {fetchMovies, fetchMovieGenres} from "../../../actions/movieAction";
import {connect} from "react-redux";
import ContentGrid from "../../Shared/ContentGrid";
import ContentPreview from "../../Shared/ContentPreview";
import FilterContent from "../../Shared/FilterContent";

const Movies = (props) => {
    let {
        movies,
        filtered,
        genres,
        movie,
        fetchMovies,
        fetchMovieGenres
    } = props;

    useEffect(() => {
        fetchMovies();
        fetchMovieGenres();
    }, [])

    return (
        <div className="video-content">
            <ContentPreview content={movie}/>
            <FilterContent genres={genres} type="movie"/>
            <ContentGrid content={filtered.length > 0 ? filtered: movies}/>
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

