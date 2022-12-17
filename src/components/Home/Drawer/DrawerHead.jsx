import React from 'react';

export default function DrawerHead() {
  return (
    <div className=' bg-[#203040] pl-2 flex py-1 justify-center  gap-3 items-center'>
      <div className='h-8 w-8 flex justify-center items-center bg-white text-black rounded-full'>
        <i className='fa-solid fa-user-tie'></i>
      </div>
      <h3 className=' text-2xl pr-3 '>Hello, mohamed </h3>
    </div>
  );
}
