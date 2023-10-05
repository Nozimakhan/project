import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Utils.scss';

const DefaultButton = ({text}) => {
  return (
    <button className='default-btn'>
       <FiShoppingCart/>{text}
    </button>
  )
}

export { DefaultButton }