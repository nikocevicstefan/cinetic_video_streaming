import { combineReducers } from "redux";
import faqReducer from "./faqReducer";
import movieReducer from "./movieReducer";
import tvshowReducer from "./tvshowReducer";

export default combineReducers({
    faq: faqReducer,
    movie: movieReducer,
    show: tvshowReducer
});