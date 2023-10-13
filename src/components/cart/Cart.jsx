import React, { useState } from 'react';
import './Cart.scss';
import { useLocation } from 'react-router-dom';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { FaChevronRight } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import empty from '../../assets/images/empty.png';
const exceptionalsRoutes = ["/login", "/admin", "/admin/order", "/admin/create", "/admin/control", "/admin/order/all", "/admin/order/contacted", "/admin/order/not-contacted"]

const CartIcon = styled(PiShoppingCartDuotone)`
  color: #4361ee;
  width: 50px;
  height: 50px;
`;

const Cart = () => {
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartProducts = useSelector(state => state.cart.cartProducts) || [];
    console.log(cartProducts);

    const totalPrice = cartProducts.reduce((total, product) => {
        return total + (product.totalPrice || 0);
    }, 0);





    return !exceptionalsRoutes.includes(location.pathname) ? (
        <div>
            {isCartOpen && <div className='overlay'></div>}
            <div className={isCartOpen ? "cart cart--active" : "cart"}>
                {isCartOpen ?
                    <button onClick={() => setIsCartOpen(false)} className='close-btn'>
                        <AiOutlineClose className="close-btn"/>
                    </button>
                    :
                    <button onClick={() => setIsCartOpen(true)} className='cart-toggle'>
                        <div className="wrapper">
                            <p className='number-cart'>{cartProducts.length}</p>
                            <CartIcon className='cart-icon'/>
                        </div>
                        <div className="Navbar_navbar__maincost">
                            <p>{totalPrice}</p><span>СУМ</span>
                        </div>
                    </button>
                }
                <div className="cart-body">
                    <div className="cart-item">
                        <h2 className='cart-ttile'>Cart</h2>
                        {cartProducts.length > 0 && (
                            <button>Барчасини ўчириш</button>
                        )}
                    </div>
                    <div className={`cart-main${cartProducts.length !==0 ? 'cart--main-secondary' : ''}`}>
                        {cartProducts.length === 0 ? (
                            <div className="cart-empty">
                                <div style={{marginBottom:"30px", fontSize:"30px", fontWeight:"bold"}}>Сават бўш</div>
                                <img src={empty} alt="img" />
                                <div className="cart__ttile">Харид қилиш</div>
                            </div>
                        ) : (
                            cartProducts.map(product =>
                                <div key={product.id}>{product.name}
                                    <div className="cart-main">
                                        <div className="cart-container">
                                            <div className="container-aznt">
                                                <div className="cart-item-secondary">
                                                    <img src={product?.productImages} alt="img" className='cart-images' />
                                                    <div className="cart-info">
                                                        <div style={{display:"flex", alignItems:"center"}}>
                                                            <h1 className='productName_uz'>{product?.productName_uz}</h1>
                                                            <FaChevronRight style={{fontSize:"25px", margin:"0 10px"}}/>
                                                        </div>
                                                        <div className="cart-price">{product?.totalPrice} СУМ</div>
                                                        <div className="cart-count">
                                                            <h2 style={{fontWeight:"500", fontSize:"18px", color:"#696969", paddingTop:"10px"}}>Сони:
                                                                <button className='cart-btn-counter'>-</button>
                                                                <button className='cart-btn-counter'>+</button>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <button className='cart-item-remove'><FiTrash2/></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <br />
                    <br />
                    {cartProducts.length > 0 && (
                        <div className="cart-submission">
                            <div className="cart-submission-title">Сони: {cartProducts.length}</div>
                            <div className="cart-submission-total-price">{totalPrice} <span>СУМ</span></div>
                            <form>
                                <input className='cart-submission-input' type="text" placeholder='Your full name' minLength={3} required/>
                                <input className='cart-submission-input' type="text" placeholder='Your phone number' required/>
                                <button className='cart-submission-btn'>Submit an order</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : <></>
}

export default Cart