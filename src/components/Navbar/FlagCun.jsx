import React from 'react'
import { flag } from '../../image'

export default function FlagCun() {
  return (
    <div className='ml-3 text-white flex justify-center items-center gap-1 px-2 py-3 border border-transparent hover:border-white'>
    <img src={flag} alt='' className=' w-6 pt-1' />
    <div className='flex justify-center items-baseline gap-1'>
      <span className=' font-semibold'>Ar</span>
      <i className='fa-solid fa-angle-down text-xs '></i>
    </div>
  </div>
)
}
