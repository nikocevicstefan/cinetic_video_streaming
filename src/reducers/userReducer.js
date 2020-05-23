import {GET_USERS, DELETE_USER, REGISTER, UPDATE_USER} from "../actions/types";

const initialState = {
    users: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.payload.id ? action.payload.data : user
                })
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id!==action.payload)
            };
        case REGISTER:
            return {
                ...state,
                users: [...state.users].concat(action.payload)
            };
        default:
            return state;
    }
}