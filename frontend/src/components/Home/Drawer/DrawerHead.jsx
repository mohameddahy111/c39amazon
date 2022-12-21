import { Avatar } from '@mui/material';
import React from 'react';
import { Stor } from '../../../context/DataContext';

export default function DrawerHead() {
  const { userInfo } = Stor();
  return (
    <div className=' bg-[#203040] pl-2 flex py-1 justify-center  gap-3 items-center'>
      <div className='h-8 w-8 flex justify-center items-center bg-white text-black rounded-full'>
        {userInfo ? (
          <Avatar src={userInfo.img} />
        ) : (
          <i className='fa-solid fa-user-tie'></i>
        )}
      </div>
      <h3 className=' text-2xl pr-3 '>
        Hello,{userInfo ? userInfo.name : ''}{' '}
      </h3>
    </div>
  );
}
