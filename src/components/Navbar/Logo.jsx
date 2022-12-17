import React from 'react';
import { Link } from 'react-router-dom';
import { logoLight } from '../../image';

export default function Logo() {
  return (
    <div className='w-32 border border-transparent hover:border-white relative'>
      <Link to='/'>
        <img src={logoLight} alt='' className='' />
      </Link>
    </div>
  );
}
