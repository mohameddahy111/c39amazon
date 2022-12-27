import React from 'react'
import style from './navbar.module.scss'

export default function UserLoction() {
  return (
    <div className={` ${style.loction} text-white md:flex items-center justify-center gap-1  relative px-2 py-3 cursor-pointer  capitalize ml-1`}>
    <i className='fa-solid fa-location-dot'></i>
    <div className=' flex flex-col  '>
      <span className=' text-xs text-gray-400 leading-3'>
        {' '}
        deliver to{' '}
      </span>
      <span className=' font-semibold'>egypt</span>
    </div>
  </div>
)
}
