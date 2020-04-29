import React from 'react';
import {connect} from 'react-redux';
import {toggleMoviePlayer} from "actions/movieAction";

const VideoPlayer = (props) => {
    const {trailer: youtubeId, toggleMoviePlayer} = props;
    return (
        <div className="video-player">
            <div className="video-player__close" onClick={toggleMoviePlayer}>X</div>
            <iframe height="100%" width="100%" allowFullScreen
                    src={`https://www.youtube.com/embed/${youtubeId}?controls=1&autoplay=1`}>
            </iframe>
            {console.log(youtubeId)}
        </div>
    );
};

export default connect(null, {toggleMoviePlayer})(VideoPlayer);
