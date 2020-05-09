import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ContentGrid from "../../Shared/ContentGrid";
import {fetchShowGenres, fetchShows} from "actions/tvshowAction";
import FilterContent from "Components/Shared/FilterContent";
import ShowPreview from "Components/Shared/ShowPreview";
import Loading from "../../Shared/Loading";
import MoviePreview from "../../Shared/MoviePreview";

const TVShows = (props) => {
    let {
        shows, filtered, genres,
        show, page, fetchShows,
        fetchShowGenres, loading
    } = props;

    useEffect(() => {
        !filtered && fetchShows(page);
    }, [page])

    useEffect(() => {
        fetchShowGenres();
    }, []);


    return (
        <div>
            {loading ? <div className="video-content__loading"><Loading/></div> : <ShowPreview content={show}/>}
            <FilterContent genres={genres} type="tv"/>
            <ContentGrid content={filtered ? filtered : shows}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    shows: state.show.shows,
    filtered: state.show.filtered,
    page: state.show.page,
    genres: state.show.genres,
    show: state.show.show,
    loading: state.app.loading
});


export default connect(mapStateToProps, {fetchShows, fetchShowGenres})(TVShows);

