import React, {useEffect} from 'react';
import GridImage from '../../../assets/img/movie10.jpg';
import ContentItem from "./ContentItem";
import {fetchMovies} from "../../../actions/movieAction";
import {connect} from "react-redux";
import {fetchFaqs} from "../../../actions/faqAction";

const VideoContent = (props) => {
    let {movies} = props;
    useEffect(() => {
        props.fetchMovies();
    }, [])
    return (
        <div className="video-content">
            <div className="video-content__grid">
                {
                    movies.map(movie => {
                        return (
                            <div className="video-content__item">
                                <ContentItem movie={movie}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};


const mapStateToProps = (state) => ({
    movies: state.movie.movies
});


export default connect(mapStateToProps, {fetchMovies})(VideoContent);

