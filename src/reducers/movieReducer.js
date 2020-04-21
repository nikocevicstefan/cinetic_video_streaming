import {FETCH_MOVIE_GENRES, FETCH_MOVIES, SELECT_MOVIE} from "../actions/types";

const initialState = {
    movies: [],
    genres: [],
    movie:{}
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_MOVIES:
            return{
                ...state,
                movies: action.payload
            };
        case FETCH_MOVIE_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case SELECT_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}