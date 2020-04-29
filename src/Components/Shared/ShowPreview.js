import React from 'react';
import {connect} from 'react-redux';
import VideoPlayer from "Components/Shared/VideoPlayer";
import {fetchShowTrailer} from "actions/tvshowAction";
import ContentDetails from "./ContentDetails";

const ShowPreview = (props) => {
    const {content, showTrailer, showTrailerPlaying} = props;

    return (
        <div className="content-preview">
            {showTrailerPlaying
                ? <VideoPlayer id={content.id} trailer={showTrailer}/>
                : <ContentDetails content={content} type="show"/>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    showTrailer: state.show.trailer,
    showTrailerPlaying: state.show.trailerPlaying
})

export default connect(mapStateToProps, {fetchShowTrailer})(ShowPreview);
