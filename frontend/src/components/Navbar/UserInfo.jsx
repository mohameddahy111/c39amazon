import React from 'react';
import { Stor } from '../../context/DataContext';

export default function UserInfo() {
  const {userInfo}=Stor()
  console.log(userInfo);
  return (
    <div className=' text-white  ml-2  leading-3  py-3 p-2 border border-transparent hover:border-white'>
      {' '}
      <span className=' text-sm text-gray-400 '>Hello,{userInfo ? userInfo.name :'sign in'} </span>{' '}
      <div className=''>
        <span className=' font-semibold '>Account & Lists</span>
        <i className='fa-solid fa-angle-down text-xs ml-1   '></i>
      </div>
    </div>
  );
}
