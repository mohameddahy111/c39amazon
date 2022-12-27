import React from 'react';
import { Link } from 'react-router-dom';
import { Stor } from '../../context/DataContext';

export default function CartLogo() {
  const { cartItems } = Stor();
  return (
    <Link to='/cart'>

    <div className=' text-white relative  px-2 py-3 mr-2  hover:shadow-sm hover:shadow-[#208080] '>
        <span className=' absolute left-1/3 text-yellow-500 font-semibold translate-y- '>
          {' '}
          {cartItems?.length}
        </span>
        <i className='fa-solid fa-cart-shopping fa-2x mt-1'></i>
        <span className=' font-semibold'>Cart</span>
    </div>
    </Link>
  );
}
