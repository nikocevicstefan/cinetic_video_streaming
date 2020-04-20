import axios from 'axios';
import {FETCH_MOVIES, SELECT_MOVIE} from "./types";
const API_KEY = 'cc5e64c3b7740570da7c503aa33d7a9e&language';

export const fetchMovies = () => async dispatch => {
    const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}=en-US&page=1`);
    dispatch({
        type: FETCH_MOVIES,
        payload: movies.data.results
    })
}

export const selectMovie = (movieId) => async dispatch =>{
    let movie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    dispatch({
        type: SELECT_MOVIE,
        payload: movie.data
    })
}