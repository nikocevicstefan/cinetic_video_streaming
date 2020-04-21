import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ContentGrid from "../../Shared/ContentGrid";
import ContentPreview from "../../Shared/ContentPreview";
import {fetchShows, fetchShowGenres} from "../../../actions/tvshowAction";

const TVShows = (props) => {
    let {
        shows,
        show,
        fetchShows,
        fetchShowGenres
    } = props;

    useEffect(() => {
        fetchShows();
        fetchShowGenres();
    }, [])

    return (
        <div className="video-content">
            <ContentPreview content={show}/>
            <ContentGrid content={shows}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    shows: state.show.shows,
    genres: state.show.genres,
    show: state.show.show
});


export default connect(mapStateToProps, {fetchShows, fetchShowGenres})(TVShows);

