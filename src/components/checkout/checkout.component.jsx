import React from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';
import { CartContext } from '../../providers/cart.provider';

const CheckoutPage = () => {
    const { cartItems, cartTotalPrice } = React.useContext(CartContext);
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item} /> //Render each cartItem using CheckoutItem component
                ))
            }
            <div className='total'>
                <span>Total: ${cartTotalPrice}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payment*
                <br />
                424242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartTotalPrice} />
        </div>
    )};

export default CheckoutPage;