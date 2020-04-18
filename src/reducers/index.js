import { combineReducers } from "redux";
import faqReducer from "./faqReducer";

export default combineReducers({
    faq: faqReducer
});