import {FETCH_MOVIES, SELECT_MOVIE} from "../actions/types";

const initialState = {
    movies: [],
    movie:{}
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_MOVIES:
            return{
                ...state,
                movies: action.payload
            };
        case SELECT_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}