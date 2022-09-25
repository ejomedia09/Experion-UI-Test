import React from 'react';
import './Sort.css';
 
const Sort = () => {
    return <div className='sort-outer'>
        <div className="sort-container">
            <div className="product-count colms"><h2>Showing 26 Product</h2></div>
            <div className="sort-by colms">
                <form>
                    <label htmlFor="sort">Sort by:</label>
                    <select name="sort" id="cars">
                        <option value="new">newest to oldest</option>
                        <option value="price">Price Low to High</option>
                    </select>
                </form>
            </div>
        </div>
    </div>;
}

 

export default Sort;