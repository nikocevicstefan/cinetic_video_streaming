import {
    FETCH_MOVIE_GENRES,
    FETCH_MOVIES,
    FILTER_MOVIES_BY_GENRE,
    FETCH_MOVIE_TRAILER,
    SELECT_MOVIE,
    TOGGLE_MOVIE_PLAYER
} from "../actions/types";

const initialState = {
    movies: [],
    filtered: [],
    genres: [],
    movie:{},
    trailer: null,
    trailerPlaying:false,
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
                movie: action.payload,
                trailerPlaying: false,
                trailer: null
            }
        case FILTER_MOVIES_BY_GENRE:
            return {
                ...state,
                filtered: state.movies.filter(movie => movie.genre_ids.includes(parseInt(action.payload)))
            }
        case FETCH_MOVIE_TRAILER:
            return {
                ...state,
                trailer: action.payload
            }
        case TOGGLE_MOVIE_PLAYER:
            return {
                ...state,
                trailerPlaying: !state.trailerPlaying,
            }
        default:
            return state;
    }
}