import React from 'react';

export default function CartLogo() {
  return (
    <div className=' text-white relative  px-2 py-3  hover:border'>
      <span className=' absolute left-1/3 text-yellow-500 font-semibold translate-y- '>
        {' '}
        1
      </span>
      <i className='fa-solid fa-cart-shopping fa-2x mt-1'></i>
      <span className=' font-semibold'>Cart</span>
    </div>
  );
}
