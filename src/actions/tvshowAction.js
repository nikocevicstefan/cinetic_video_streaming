import axios from 'axios';
import {
    DELETE_SHOW, FETCH_MORE_SHOWS,
    FETCH_SHOW_GENRES, FETCH_SHOW_TRAILER,
    FETCH_SHOWS, FILTER_SHOWS_BY_GENRE,
    FILTER_SHOWS_BY_NAME, RESET_SHOW_FILTERS,
    SELECT_SHOW, SET_LOADING,
    TOGGLE_SHOW_PLAYER, UPDATE_SHOW_PAGE
} from "./types";

const API_KEY = 'cc5e64c3b7740570da7c503aa33d7a9e';

export const fetchShows = (page = 1) => async dispatch => {
    dispatch({type: SET_LOADING});

    try {
        const shows = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
        dispatch({
            type: page !== 1 ? FETCH_MORE_SHOWS : FETCH_SHOWS,
            payload: shows.data.results
        })

        //set the first show as default selected show
        page === 1 && dispatch(selectShow(shows.data.results[0].id));
    } catch (e) {
        console.log('Error')
    } finally {
        dispatch({type: SET_LOADING});
    }
}


export const selectShow = (showId) => async dispatch => {
    dispatch({type: SET_LOADING});

    let show = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`);
    dispatch({
        type: SELECT_SHOW,
        payload: show.data
    })

    dispatch(fetchShowTrailer(show.data.id))
    dispatch({type: SET_LOADING});
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

export const filterShowsByName = (showName) => dispatch => {
    if (showName.length === 1 || !showName) {
        dispatch({type: RESET_SHOW_FILTERS})
    } else {
        dispatch({
            type: FILTER_SHOWS_BY_NAME,
            payload: showName
        })
    }
}

export const deleteShow = (showId) => dispatch => {
    dispatch({
        type: DELETE_SHOW,
        payload: showId
    });
}

export const updateShowPage = () => async dispatch => await dispatch({type: UPDATE_SHOW_PAGE})

export const toggleShowPlayer = () => dispatch => dispatch({type: TOGGLE_SHOW_PLAYER})


