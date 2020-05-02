import React from 'react';
import {connect} from 'react-redux';
import {toggleMoviePlayer} from "actions/movieAction";
import {toggleShowPlayer} from "actions/tvshowAction";
import closeIcon from "assets/img/icons/close.svg"

const VideoPlayer = (props) => {
    const {
        trailer: youtubeId, toggleMoviePlayer,
        toggleShowPlayer, type
    } = props;

    const togglePlayer = () => {
        if (type === 'movie') {
            toggleMoviePlayer()
        } else {
            toggleShowPlayer()
        }
    }

    return (
        <div className="video-player">
            <div className="video-player__close" onClick={togglePlayer}><img src={closeIcon} alt=""/></div>
            <iframe height="100%" width="100%" allowFullScreen
                    src={`https://www.youtube.com/embed/${youtubeId}?controls=1&autoplay=1`}>
            </iframe>
            {console.log(youtubeId)}
        </div>
    );
};

export default connect(null, {toggleMoviePlayer, toggleShowPlayer})(VideoPlayer);
