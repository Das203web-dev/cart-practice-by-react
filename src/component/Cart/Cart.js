import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteCart, removeFromDb } from '../../localStorage';

const Cart = ({ updatedCart }) => {
    // console.log(updatedCart)
    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0;

    for (const product of updatedCart) {
        // console.log(product)
        quantity = quantity + product.quantity
        totalPrice = totalPrice + product.price * quantity;
        shippingCost = shippingCost + product.shipping;
    }
    const tax = totalPrice * (10 / 100);
    const grandTotal = totalPrice + shippingCost + tax
    return (
        <div>
            <table style={{ textAlign: 'left' }}>
                {/* <thead><h3>Cart Info</h3></thead> */}
                <tbody>
                    <tr style={{ border: '1px solid red' }}>
                        <td><p>Selected item :</p></td>
                        <td><p>{quantity}</p></td>
                    </tr>
                    <tr>
                        <td><p>Total Price : </p></td><td><p>{totalPrice}</p></td>
                    </tr>
                    <tr>
                        <td><p>Total Shipping Charge : </p></td><td> <p>{shippingCost}</p></td>
                    </tr>
                    <tr>
                        <td><p>Tax : </p></td><td><p>{tax.toFixed(2)}</p></td>
                    </tr>
                    <tr>
                        <td><h4>Grand Total : </h4></td><td><h4>{grandTotal.toFixed(2)}</h4></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={deleteCart} style={{ backgroundColor: 'orange' }}> <span>Clear Cart</span> <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button><br />
            <button onClick={() => removeFromDb(updatedCart.id)} style={{ backgroundColor: 'tomato' }}> <span>Review Cart</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cart;