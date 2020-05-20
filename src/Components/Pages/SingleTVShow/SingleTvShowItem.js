import React, {useState} from 'react';

const SingleTvShowItem = (props) => {
    const {
        show,season
    } = props;
    const [details, setDetails] = useState(false);
    const setDetailsHandler = () => {
        setDetails(!details);

    };
    const imageError = (e) => {
        e.target.src = `http://image.tmdb.org/t/p/original/${show.poster_path}`;
    }

    return (
        <div className="content-item" onMouseOver={setDetailsHandler}
             onMouseOut={setDetailsHandler}>
            <img src={`http://image.tmdb.org/t/p/w500/${season.poster_path}`}
                 onError={imageError} alt=""/>
            <div className={`content-item__details ${details && 'show'}`}>
                <h1>{season.name}</h1>
                <p>Episodes: {season.episode_count}</p>
            </div>
        </div>
    );
};

export default SingleTvShowItem
