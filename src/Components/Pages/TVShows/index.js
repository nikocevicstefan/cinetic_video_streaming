import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ContentGrid from "../../Shared/ContentGrid";
import ContentPreview from "../../Shared/ContentPreview";
import {fetchShows, fetchShowGenres} from "../../../actions/tvshowAction";
import FilterContent from "../../Shared/FilterContent";

const TVShows = (props) => {
    let {
        shows,
        filtered,
        genres,
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
            <FilterContent genres={genres} type="tv"/>
            <ContentGrid content={filtered.length > 0 ? filtered : shows}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    shows: state.show.shows,
    filtered: state.show.filtered,
    genres: state.show.genres,
    show: state.show.show
});


export default connect(mapStateToProps, {fetchShows, fetchShowGenres})(TVShows);

