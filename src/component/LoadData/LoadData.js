import React, { useEffect, useState } from 'react';
import './LoadData.css'
import LoadSingleProduct from '../LoadSingleProduct/LoadSingleProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import { getCart, storedCart } from '../../localStorage';
// import { saveCart } from '../../localStorage';
// import { storedCart } from '../../localStorage';
// import { saveCart, storedCart } from '../../localStorage';

const LoadData = () => {
    const [products, setProducts] = useState([]);
    const [cartInfo, setCartInfo] = useState([]);
    const cartHandler = (product) => {
        // console.log('cliked', product);
        let newCart = [];
        const existedProduct = cartInfo.find(existProduct => existProduct.id === product.id);
        if (existedProduct) {
            const restProducts = cartInfo.filter(existedProduct => existedProduct.id !== product.id);
            existedProduct.quantity = existedProduct.quantity + 1
            newCart = [...restProducts, existedProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cartInfo, product]
        }
        setCartInfo(newCart);
        storedCart(product.id)
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    useEffect(() => {
        const storedCart = getCart();
        let newQuantity = [];
        // console.log(storedCart)
        for (const id in storedCart) {
            const cartId = products.find(product => product.id === id);
            if (cartId) {
                // console.log(cartId)
                const cartQuantity = storedCart[id];
                cartId.quantity = cartQuantity;
                newQuantity.push(cartId);
            }
        }
        setCartInfo(newQuantity)
    }, [products])

    return (
        <div className='products-container'>
            <div>
                <h1>Product div</h1>
                <div className='products-div'>
                    {
                        products.map(product => <LoadSingleProduct product={product} key={product.id} cartHandler={cartHandler}></LoadSingleProduct>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <h1 style={{ color: 'orange' }}><span>Cart</span> <span style={{ color: 'tomato' }}>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
                </h1>

                <Cart updatedCart={cartInfo}></Cart>

            </div>
        </div >
    );
};

export default LoadData;