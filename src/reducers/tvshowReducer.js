import {FETCH_SHOW_GENRES, FETCH_SHOWS, SELECT_SHOW} from "../actions/types";

const initialState = {
    shows: [],
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
        default:
            return state;
    }
}