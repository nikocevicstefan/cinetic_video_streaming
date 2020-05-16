import {
    DELETE_MOVIE,
    FETCH_MORE_MOVIES, FETCH_MOVIE_GENRES,
    FETCH_MOVIE_TRAILER, FETCH_MOVIES,
    FILTER_MOVIES_BY_GENRE, FILTER_MOVIES_BY_NAME,
    RESET_MOVIE_FILTERS, SELECT_MOVIE,
    TOGGLE_MOVIE_PLAYER, UPDATE_MOVIE_PAGE
} from "../actions/types";

const initialState = {
    movies: [],
    filtered: null,
    searched: null,
    genres: [],
    movie: {},
    trailer: null,
    trailerPlaying: false,
    page: 1
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case FETCH_MORE_MOVIES:
            return {
                ...state,
                movies: state.movies.concat(action.payload)
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
            return parseInt(action.payload) !== -1
                ? {
                    ...state,
                    filtered: state.movies.filter(movie => movie.genre_ids.includes(parseInt(action.payload)))
                } : {
                    ...state,
                    filtered: null,
                    searched: null
                }
        case FILTER_MOVIES_BY_NAME:
            return state.filtered
                ? {
                    ...state,
                    searched: state.filtered.filter(movie => movie.title.toLowerCase().includes(action.payload.toLowerCase()))
                }
                : {
                    ...state,
                    filtered: state.movies,
                    searched: state.movies.filter(movie => movie.title.toLowerCase().includes(action.payload.toLowerCase()))
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
        case UPDATE_MOVIE_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case RESET_MOVIE_FILTERS:
            return {
                ...state,
                searched: null
            }
        case DELETE_MOVIE:
            return state.searched
                ? {
                    ...state,
                    searched: state.searched.filter(movie => movie.id !== action.payload),
                    filtered: state.filtered.filter(movie => movie.id !== action.payload),
                    movies: state.movies.filter(movie => movie.id !== action.payload)
                }
                : (state.filtered)
                    ? {
                        ...state,
                        filtered: state.filtered.filter(movie => movie.id !== action.payload),
                        movies: state.movies.filter(movie => movie.id !== action.payload)
                    }
                    : {
                        ...state,
                        movies: state.movies.filter(movie => movie.id !== action.payload)
                    };
        default:
            return state;
    }
}