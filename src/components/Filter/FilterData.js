import React from 'react';
import CloseIcon from './Images/close.svg'
 
const FilterData = () => {
    return <>
        <div className='filter-data col-divide-2'>
            <div className='filter-key-list'>
                <h2>Filters based on your profile</h2>
                <ul className='filter-key'>
                    <li>Size <img src={CloseIcon} alt='close'></img></li>
                    <li>Color <img src={CloseIcon} alt='close'></img></li>
                    <li>Nike <img src={CloseIcon} alt='close'></img></li>
                    <li>Casual <img src={CloseIcon} alt='close'></img></li>
                    <li>Footwear <img src={CloseIcon} alt='close'></img></li>
                </ul>
            </div>
        </div>
    </>;
}

 

export default FilterData;