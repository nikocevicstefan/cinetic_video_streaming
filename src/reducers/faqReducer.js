import {FETCH_FAQS} from "../actions/types";

const initialState = {
    faqs:[]
}

export default function (state=initialState, action) {
    switch (action.type) {
        case FETCH_FAQS:
            return{
                ...state,
                faqs: action.payload
            };
        default:
            return state;
    }
}