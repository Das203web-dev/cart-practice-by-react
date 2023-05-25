import React from 'react';
import './LoadSingleProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const LoadSingleProduct = (props) => {
    // const { handleAddToCart } = props
    // console.log(props.product)
    const { cartHandler } = props;
    const { name, price, seller, ratings, img } = props.product;

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div style={{ padding: '0 10px' }}>
                <div>
                    <h3 style={{ margin: '0px' }}>{name}</h3>
                    <p style={{ margin: '5px 0' }}>Price : {price}</p>
                </div>
                <div>
                    <p style={{ margin: '10px 0px' }}>Manufacturer : {seller}</p>
                    <p style={{ margin: '0' }}>Ratings : {ratings}</p>
                </div>
            </div>
            <button onClick={() => cartHandler(props.product)} className='addToCart-btn'><p style={{ marginRight: '5px' }}>Add To Cart</p> <span className='addToCart-icon' ><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default LoadSingleProduct;