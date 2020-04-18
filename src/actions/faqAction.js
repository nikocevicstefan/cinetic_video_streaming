import axios from 'axios';
import {FETCH_FAQS} from "./types";

export const fetchFaqs = () => async dispatch => {
    const faqs = await axios.get('http://localhost:5000/faqs');
    console.log(faqs);
    dispatch({
        type: FETCH_FAQS,
        payload: faqs.data
    })
};