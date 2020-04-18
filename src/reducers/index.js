import { combineReducers } from "redux";
import faqReducer from "./faqReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
    faq: faqReducer,
    movie: movieReducer
});