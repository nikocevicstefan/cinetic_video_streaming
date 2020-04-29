import axios from 'axios';
import {
    FETCH_MOVIE_GENRES,
    FETCH_MOVIES,
    FILTER_MOVIES_BY_GENRE,
    SELECT_MOVIE,
    FETCH_MOVIE_TRAILER,
    TOGGLE_MOVIE_PLAYER
} from "./types";
import {toast} from "react-toastify";

const API_KEY = 'cc5e64c3b7740570da7c503aa33d7a9e';

export const fetchMovies = () => async dispatch => {
    try {
        const {data: {results: movies}} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

        dispatch({
            type: FETCH_MOVIES,
            payload: movies
        })

        //dispatch the first movie to the reducer and set as default selected movie
        dispatch(selectMovie(movies[0].id));
    } catch (e) {
        //to be expanded
        console.error(e);
    }

}

export const selectMovie = (movieId) => async dispatch => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    dispatch({
        type: SELECT_MOVIE,
        payload: data
    })

    dispatch(fetchMovieTrailer(data.id));
}

export const fetchMovieTrailer = (id) => async dispatch => {
    try {
        const {data: {results: trailers}} = await axios.get(` https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
        dispatch({
            type: FETCH_MOVIE_TRAILER,
            payload: trailers[0].key
        })
    } catch (e) {
        console.log('No trailer available');
    }
}

export const fetchMovieGenres = () => async dispatch => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    dispatch({
        type: FETCH_MOVIE_GENRES,
        payload: data.genres
    })
}

export const filterMoviesByGenre = (categoryId) => dispatch => {
    dispatch({
        type: FILTER_MOVIES_BY_GENRE,
        payload: categoryId
    })
}

export const toggleMoviePlayer = () => dispatch => dispatch({type: TOGGLE_MOVIE_PLAYER})


