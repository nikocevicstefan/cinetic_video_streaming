import {FETCH_SHOWS, SELECT_SHOW} from "../actions/types";

const initialState = {
    shows: [],
    show:{}
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_SHOWS:
            return{
                ...state,
                shows: action.payload
            };
        case SELECT_SHOW:
            return {
                ...state,
                show: action.payload
            }
        default:
            return state;
    }
}