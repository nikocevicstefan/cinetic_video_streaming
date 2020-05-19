import React, {useState} from 'react';
import {connect} from "react-redux";
import {selectMovie, deleteMovie} from "../../actions/movieAction";
import {selectShow, deleteShow} from "../../actions/tvshowAction";
import {isAdmin} from "../../Helpers";


const ContentItem = (props) => {
    const [details, setDetails] = useState(false);
    const setDetailsHandler = () => {
        setDetails(!details);
    };

    const {
        item, selectMovie,
        selectShow, deleteMovie,
        deleteShow, type
    } = props;

    const selectContentHandler = () => {
        type === 'movies'
            ? selectMovie(item.id)
            : selectShow(item.id);
    }
    const deleteContentHandler = (e) => {
        e.stopPropagation();
        type === 'movies'
            ? deleteMovie(item.id)
            : deleteShow(item.id);
    }


    return (
        <div className="content-item"
             onClick={selectContentHandler}
             onMouseOver={setDetailsHandler}
             onMouseOut={setDetailsHandler}>
            <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt=""/>
            <div className={`content-item__details ${details && 'show'}`}>
                <h1>{type === 'movies' ? item.title : item.name}</h1>
                <p>{item.overview}</p>
                <p>Rating: {item.vote_average}</p>
                {
                    type === 'movies'
                    ? <p>Released: {item.release_date}</p>
                    : <p>Aired: {item.first_air_date}</p>
                }
            </div>

            {isAdmin()
            && <button className="content-item__delete" onClick={deleteContentHandler}><i className="fas fa-trash"></i>
            </button>
            }
        </div>
    );
};

export default connect(null, {selectMovie, selectShow, deleteMovie, deleteShow})(ContentItem)
