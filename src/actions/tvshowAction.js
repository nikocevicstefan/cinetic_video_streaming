import axios from 'axios';
import {FETCH_SHOWS, SELECT_SHOW} from "./types";
const API_KEY = 'cc5e64c3b7740570da7c503aa33d7a9e&language';

export const fetchShows = () => async dispatch => {
    const shows = await axios.get(`    https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch({
        type: FETCH_SHOWS,
        payload: shows.data.results
    })

    //set the first show as default selected show
    dispatch(selectShow(shows.data.results[0].id));
}


export const selectShow = (showId) => async dispatch =>{
    let show = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`);
    dispatch({
        type: SELECT_SHOW,
        payload: show.data
    })
}

