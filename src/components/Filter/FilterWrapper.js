import React from 'react';
import Filter from './Filter';
import FilterData from './FilterData'; 
import './Filter.css';
 
const FilterWrapper = () => {
    return <div className='filter-wrapper'>
            <FilterData />
            <Filter />
        </div>;
}

 

export default FilterWrapper;