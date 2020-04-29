import axios from 'axios';
import {
    FETCH_SHOW_GENRES,
    FETCH_SHOW_TRAILER,
    FETCH_SHOWS,
    FILTER_SHOWS_BY_GENRE,
    SELECT_SHOW,
    TOGGLE_SHOW_PLAYER
} from "./types";

const API_KEY = 'cc5e64c3b7740570da7c503aa33d7a9e';

export const fetchShows = () => async dispatch => {
    const shows = await axios.get(`    https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch({
        type: FETCH_SHOWS,
        payload: shows.data.results
    })

    //set the first show as default selected show
    dispatch(selectShow(shows.data.results[0].id));
}


export const selectShow = (showId) => async dispatch => {
    let show = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`);
    dispatch({
        type: SELECT_SHOW,
        payload: show.data
    })

    dispatch(fetchShowTrailer(show.data.id))
}

export const fetchShowTrailer = (id) => async dispatch => {
    try {
        const {data: {results: trailers}} = await axios.get(` https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`);
        dispatch({
            type: FETCH_SHOW_TRAILER,
            payload: trailers[0].key
        })
    } catch (e) {
        console.log('No show trailer found')
    }

}

export const fetchShowGenres = () => async dispatch => {
    let showGenres = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language&language=en-US`);

    dispatch({
        type: FETCH_SHOW_GENRES,
        payload: showGenres.data.genres
    })
}

export const filterShowsByGenre = (genreId) => dispatch => {
    dispatch({
        type: FILTER_SHOWS_BY_GENRE,
        payload: genreId
    })
}

export const toggleShowPlayer = () => dispatch => dispatch({type: TOGGLE_SHOW_PLAYER})


