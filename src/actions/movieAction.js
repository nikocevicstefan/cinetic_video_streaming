import axios from 'axios';
import {FETCH_MOVIES} from "./types";

export const fetchMovies = () => async dispatch => {
    const movies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cc5e64c3b7740570da7c503aa33d7a9e&language=en-US&page=1');
    dispatch({
        type: FETCH_MOVIES,
        payload: movies.data.results
    })
}