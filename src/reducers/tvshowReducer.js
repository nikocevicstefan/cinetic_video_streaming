import {FETCH_SHOW_GENRES, FETCH_SHOWS, FILTER_SHOWS_BY_GENRE, SELECT_SHOW} from "../actions/types";

const initialState = {
    shows: [],
    filtered: [],
    genres: [],
    show:{}
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_SHOWS:
            return{
                ...state,
                shows: action.payload
            };
        case FETCH_SHOW_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case SELECT_SHOW:
            return {
                ...state,
                show: action.payload
            };
        case FILTER_SHOWS_BY_GENRE:
            return {
                ...state,
                filtered: state.shows.filter(show => show.genre_ids.includes(parseInt(action.payload)))
            }
        default:
            return state;
    }
}