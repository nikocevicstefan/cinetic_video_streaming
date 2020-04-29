import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ContentGrid from "../../Shared/ContentGrid";
import {fetchShowGenres, fetchShows} from "actions/tvshowAction";
import FilterContent from "Components/Shared/FilterContent";
import ShowPreview from "Components/Shared/ShowPreview";

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
            <ShowPreview content={show}/>
            <FilterContent genres={genres} type="tv"/>
            <ContentGrid content={filtered ? filtered : shows}/>
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

