import React from 'react';
import { Link } from 'react-router-dom';
import { logoLight } from '../../image';

export default function Logo() {
  return (
    <div className=' hover:shadow-sm hover:shadow-[#208080]  relative'>
      <Link to='/' className=' flex justify-center items-center'>
        <img src={logoLight} alt='' className='w-[100px]'  />
        <h2 className=' text-[#f0c000] uppercase font-extrabold italic text-3xl'>Shopping </h2>
      </Link>
    </div>
  );
}
