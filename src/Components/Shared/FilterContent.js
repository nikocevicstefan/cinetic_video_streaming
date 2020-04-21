import React from 'react';
import Search from '../../assets/img/icons/search.svg';
const FilterContent = (props) => {
    const {genres} = props;
    return (
        <div className="filter-content">
            <div className="filter-content__categories">
                <select name="" id="">
                    <option value="" selected disabled hidden>Choose genre</option>
                    {
                        genres.map(genre => {
                            return <option value={genre.id}>{genre.name}</option>
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

export default FilterContent;
