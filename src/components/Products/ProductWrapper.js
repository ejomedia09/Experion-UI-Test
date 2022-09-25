import React from 'react';
import ProductItem from "./ProductItem";
import Items from '../../data/items.json';
import './Product.css';

const ProductWrapper = () => {
    return <main className='product-wrapper'>
                { Items.map((item) => {
                    return(
                        <ProductItem 
                            Name={item.Name} 
                            Category={item.Category} 
                            Price={item.Price} 
                            Image={item.Image} />
                    )
                } )}
            </main>;
}

 

export default ProductWrapper;