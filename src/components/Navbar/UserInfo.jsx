import React from 'react'

export default function UserInfo() {
  return (
    <div className=' text-white  ml-2  leading-3  py-3 p-2  hover:border'>
    {' '}
    <span className=' text-sm text-gray-400 '>Hello, sign in</span>{' '}
    <div className=''>
      <span className=' font-semibold '>Account & Lists</span>
      <i className='fa-solid fa-angle-down text-xs ml-1   '></i>
    </div>
  </div>
)
}
