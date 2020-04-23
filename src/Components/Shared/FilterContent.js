import React, {useState} from 'react';
import Search from '../../assets/img/icons/search.svg';
import {connect} from 'react-redux';
import {filterMoviesByGenre} from "../../actions/movieAction";
import {filterShowsByGenre} from "../../actions/tvshowAction";

const FilterContent = (props) => {
    const {
        genres,
        type,
        filterMovies,
        filterShows,
        filterMoviesByName
    } = props;

    const [searchValue, setSearchValue] = useState('');

    const filterContentHandler = (event) => {
        type === 'movie'
            ? filterMovies(event.target.value)
            : filterShows(event.target.value)
    };

    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
        filterMoviesByName(searchValue)
    }
    const setFilteredHandler = () => {

    }

    return (
        <div className="filter-content" onClick={setFilteredHandler}>
            <div className="filter-content__categories">
                <select name="" id="" onChange={filterContentHandler}>
                    <option value="" selected disabled hidden>Choose genre</option>
                    {
                        genres.map(genre => {
                            return <option value={genre.id} key={genre.id}>{genre.name}</option>
                        })
                    }
                </select>
            </div>
           {/* <div className="filter-content__search">
                <input type="text" onChange={onSearchChange} value={searchValue}/>
                <img src={Search} alt="search icon"/>
            </div>*/}
        </div>
    );
};

export default connect(null, {
    filterMovies: filterMoviesByGenre,
    filterShows: filterShowsByGenre,
})(FilterContent);
