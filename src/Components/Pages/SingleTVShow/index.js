import React, {useState} from 'react';
import Loading from "../../Shared/Loading";
import {connect} from 'react-redux'
import {v4 as uuidv4} from 'uuid';
import NoImage from 'assets/img/icons/noImage.svg'
import SingleTvShowItem from "./SingleTvShowItem";

const SingleTVShow = (props) => {
    const [details, setDetails] = useState(false);
    const setDetailsHandler = () => {
        setDetails(!details);
    };

    const {show, loading, seasons} = props;
    const headerImg = `http://image.tmdb.org/t/p/original/${show.backdrop_path ? show.backdrop_path : show.poster_path}`


    return (
        <div className="single-show">
            <div className="single-show__header"
                 style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)),url(${headerImg})`,}}>
                <h1 className="single-show__title">{show.name}</h1>
            </div>
            <div className="single-show__content">
                <div className="single-show__description">
                    <h1 className="single-show__description__heading">Description</h1>
                    <p className="single-show__description__text">{show.overview}</p>
                </div>
            </div>
            <div className="single-show__seasons">
                <h1 className="single-show__seasons__title">Seasons</h1>
                <div className="content-grid">
                    {
                        seasons.map(season => {
                            return (
                                <div className="content-grid__season" key={uuidv4()}>
                                    <SingleTvShowItem show={show} season={season}/>
                                </div>
                            )
                        })
                    }
                    {
                        loading &&
                        <div className="content-item--loading">
                            <Loading/>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    show: state.show.show,
    seasons: state.show.seasons,
    loading: state.app.loading
});

export default connect(mapStateToProps, {})(SingleTVShow);
