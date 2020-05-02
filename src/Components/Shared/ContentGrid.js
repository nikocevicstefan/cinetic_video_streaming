import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import ContentItem from "./ContentItem";
import {fetchMovies, updateMoviePage} from 'actions/movieAction'
import {fetchShows, updateShowPage} from 'actions/tvshowAction'
import Loading from "./Loading";

const ContentGrid = (props) => {
    const {content, type, updateMoviePage, updateShowPage, loading} = props;

    useEffect(function fetchMoreData() {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        if (type === 'movies') {
            updateMoviePage();
        } else {
            updateShowPage();
        }
    }

    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        content.length
            ? <div className="content-grid">
                {
                    content.map(item => {
                        return (
                            <div className="content-grid__item" key={item.id} onClick={scrollToTop}>
                                <ContentItem item={item}/>
                            </div>
                        )
                    })
                }
                {
                    loading &&
                    <div className="content-item--loading">
                        <Loading />
                    </div>

                }
            </div>
            : <h1 className="content-grid--empty">No content found</h1>
    );
};

const mapStateToProps = (state) => ({
    moviePage: state.movie.page,
    showPage: state.show.page,
    loading: state.app.loading,
})

export default connect(mapStateToProps, {fetchMovies, fetchShows, updateMoviePage, updateShowPage})(ContentGrid);
