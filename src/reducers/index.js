import {combineReducers} from "redux";
import faqReducer from "./faqReducer";
import movieReducer from "./movieReducer";
import tvshowReducer from "./tvshowReducer";
import appReducer from "./appReducer";

export default combineReducers({
    faq: faqReducer,
    movie: movieReducer,
    show: tvshowReducer,
    app: appReducer
});