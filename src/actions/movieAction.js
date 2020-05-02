import axios from 'axios';
import {
    FETCH_MOVIE_GENRES,
    FETCH_MOVIE_TRAILER,
    FETCH_MOVIES,
    FETCH_MORE_MOVIES,
    FILTER_MOVIES_BY_GENRE,
    SELECT_MOVIE,
    TOGGLE_MOVIE_PLAYER, UPDATE_MOVIE_PAGE
} from "./types";

const API_KEY = 'cc5e64c3b7740570da7c503aa33d7a9e';

export const fetchMovies = (page = 1) => async dispatch => {
    console.log('Page', page)
    try {
        const {data: {results: movies}} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

        dispatch({
            type: page !== 1 ? FETCH_MORE_MOVIES : FETCH_MOVIES,
            payload: movies
        })

        //dispatch the first movie to the reducer and set as default selected movie
        page === 1 && dispatch(selectMovie(movies[0].id));
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

export const updateMoviePage = () => async dispatch => await dispatch({type: UPDATE_MOVIE_PAGE})

export const filterMoviesByGenre = (categoryId) => dispatch => {
    dispatch({
        type: FILTER_MOVIES_BY_GENRE,
        payload: categoryId
    })
}

export const toggleMoviePlayer = () => dispatch => dispatch({type: TOGGLE_MOVIE_PLAYER})


