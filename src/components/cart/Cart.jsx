import React, { useState } from 'react';
import './Cart.scss';
import { useLocation } from 'react-router-dom';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import styled from 'styled-components';

const CartIcon = styled(PiShoppingCartDuotone)`
  color: #4361ee;
  width: 50px;
  height: 50px;
`;

const Cart = () => {
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    return location.pathname !== "/admin" && location.pathname !== "/login" ? (
        <div className={isCartOpen ? "cart cart--active" : "cart"}>
            <button className='cart-toggle' onClick={() => setIsCartOpen(!isCartOpen)}>
                <CartIcon/>
                <div className="count">
                    <p>0</p>
                </div>
            </button>
        </div>
    ) : <></>
}

export default Cart