import React, {useState} from 'react';
import {connect} from 'react-redux';
import {filterMoviesByGenre, filterMoviesByName} from "../../actions/movieAction";
import {filterShowsByGenre, filterShowsByName} from "../../actions/tvshowAction";
import Search from 'assets/img/icons/search.svg'

const FilterContent = (props) => {
    const {
        genres, type,
        filterMovies, filterShows,
        filterMoviesByName, filterShowsByName
    } = props;

    const [searchValue, setSearchValue] = useState('');

    const filterContentHandler = (event) => {
        type === 'movie'
            ? filterMovies(event.target.value)
            : filterShows(event.target.value)
        setSearchValue('');
    };

    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
        type === 'movie'
            ? filterMoviesByName(searchValue)
            : filterShowsByName(searchValue)
    }


    return (
        <div className="filter-content">
            <div className="filter-content__categories">
                <select name="" id="" onChange={filterContentHandler}>
                    <option value={-1} selected>All</option>
                    {
                        genres.map(genre => {
                            return <option value={genre.id} key={genre.id}>{genre.name}</option>
                        })
                    }
                </select>
            </div>
            <div className="filter-content__search">
                <input type="text" onChange={onSearchChange} value={searchValue}/>
                <img src={Search} alt="search icon"/>
            </div>
        </div>
    );
};

export default connect(null, {
    filterMovies: filterMoviesByGenre,
    filterShows: filterShowsByGenre,
    filterShowsByName: filterShowsByName,
    filterMoviesByName: filterMoviesByName
})(FilterContent);
