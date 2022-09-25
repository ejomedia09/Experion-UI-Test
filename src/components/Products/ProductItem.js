import React from 'react';
 
const ProductItem = (props) => {
    let url="#";
    return <article className='item'>
                <img alt={props.Name}  title={props.Name} src={props.Image}></img>
                <div className='product-data'>
                    <h3>{props.Name}</h3>
                    <p>{props.Category}</p>
                    <h3>{props.Price}</h3>
                    <a href={url} className="add-cart-btn">Add to Cart</a>
                </div>
            </article>;
}

export default ProductItem;