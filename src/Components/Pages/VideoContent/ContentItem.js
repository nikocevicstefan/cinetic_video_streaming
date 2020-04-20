import React from 'react';
import {connect} from "react-redux";
import {selectMovie} from "../../../actions/movieAction";


const ContentItem = (props) => {
    const {item, selectMovie} = props;

    const selectMovieHandler = () => selectMovie(item.id)

    return (
        <div className="content-item" onClick={selectMovieHandler}>
            <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt=""/>
        </div>
    );
};

export default connect(null, {selectMovie})(ContentItem)
