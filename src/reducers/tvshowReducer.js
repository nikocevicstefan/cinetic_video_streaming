import {
    DELETE_MOVIE, DELETE_SHOW,
    FETCH_MORE_SHOWS,
    FETCH_SHOW_GENRES,
    FETCH_SHOW_TRAILER,
    FETCH_SHOWS,
    FILTER_SHOWS_BY_GENRE, FILTER_SHOWS_BY_NAME, RESET_SHOW_FILTERS,
    SELECT_SHOW,
    TOGGLE_SHOW_PLAYER, UPDATE_SHOW_PAGE
} from "../actions/types";

const initialState = {
    shows: [], filtered: null,
    genres: [], show: {},
    seasons: [], trailer: null,
    trailerPlaying: false, page: 1,
    searched: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SHOWS:
            return {
                ...state,
                shows: action.payload
            };
        case FETCH_MORE_SHOWS:
            return {
                ...state,
                shows: state.shows.concat(action.payload)
            };
        case FETCH_SHOW_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case SELECT_SHOW:
            return {
                ...state,
                show: action.payload,
                trailerPlaying: false,
                trailer: null,
                seasons: action.payload.seasons
            };
        case FILTER_SHOWS_BY_GENRE:
            return parseInt(action.payload) !== -1
                ? {
                    ...state,
                    filtered: state.shows.filter(show => show.genre_ids.includes(parseInt(action.payload))),
                    searched: null
                }
                : {
                    ...state,
                    filtered: null,
                    searched: null
                }
        case FILTER_SHOWS_BY_NAME:
            return state.filtered
                ? {
                    ...state,
                    searched: state.filtered.filter(show => show.name.toLowerCase().includes(action.payload.toLowerCase()))
                }
                : {
                    ...state,
                    filtered: state.shows,
                    searched: state.shows.filter(show => show.name.toLowerCase().includes(action.payload.toLowerCase()))
                }
        case FETCH_SHOW_TRAILER:
            return {
                ...state,
                trailer: action.payload
            }
        case TOGGLE_SHOW_PLAYER:
            return {
                ...state,
                trailerPlaying: !state.trailerPlaying
            }
        case UPDATE_SHOW_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case RESET_SHOW_FILTERS:
            return {
                ...state,
                searched: null
            }
        case DELETE_SHOW:
            return state.searched
                ? {
                    ...state,
                    searched: state.searched.filter(show => show.id !== action.payload),
                    filtered: state.filtered.filter(show => show.id !== action.payload),
                    shows: state.shows.filter(show => show.id !== action.payload)
                }
                : (state.filtered)
                    ? {
                        ...state,
                        filtered: state.filtered.filter(show => show.id !== action.payload),
                        shows: state.shows.filter(show => show.id !== action.payload)
                    }
                    : {
                        ...state,
                        shows: state.shows.filter(show => show.id !== action.payload)
                    };
        default:
            return state;
    }
}