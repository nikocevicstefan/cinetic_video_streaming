import React from 'react';
import {connect} from "react-redux";
import {selectMovie} from "../../actions/movieAction";
import {selectShow} from "../../actions/tvshowAction";


const ContentItem = (props) => {
    const {item, selectMovie, selectShow} = props;

    const selectMovieHandler = () => selectMovie(item.id);
    const selectShowHandler = () => selectShow(item.id);

    return (
        <div className="content-item" onClick={item.name ? selectShowHandler : selectMovieHandler}>
            <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt=""/>
        </div>
    );
};

export default connect(null, {selectMovie, selectShow})(ContentItem)
