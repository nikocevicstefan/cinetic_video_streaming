import React from 'react';
import Search from '../../assets/img/icons/search.svg';
import {connect} from 'react-redux';
import {filterMovies} from "../../actions/movieAction";

const FilterContent = (props) => {
    const {genres, type, filterMovies} = props;

    const filterMoviesHandler = (event) => filterMovies(event.target.value);

    return (
        <div className="filter-content">
            <div className="filter-content__categories">
                <select name="" id="" onChange={filterMoviesHandler}>
                    {
                        genres.map(genre => {
                            return <option value={genre.id} key={genre.id}>{genre.name}</option>
                        })
                    }
                </select>
            </div>
            <div className="filter-content__search">
                <input type="text"/>
                <img src={Search} alt="search icon"/>
            </div>
        </div>
    );
};

export default connect(null, {filterMovies})(FilterContent);
