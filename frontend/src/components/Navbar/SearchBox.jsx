import React from 'react';
import { Stor } from '../../context/DataContext';
import AutoComplet from './AutoComplet';
import { UseCategories } from '../../hooks/UseApi';

export default function SearchBox() {
  const { categories } = UseCategories();
  const { keyWord, setKeyWord } = Stor();

  return (
    <div className=' ml-2 h-10  flex items-center w-[600px] '>
      <select
        name='categroy'
        id=''
        // onChange={e => {
        //   setCategory(e.target.value);
        // }}
        className='w-20 pl-2 h-full rounded-l-md focus:outline-[#f3a847] focus:bg-gray-300  bg-gray-100 hover:bg-gray-300 border-r-2 '
      >
        <option className=' bg-white' value=''>
          {' '}
          All
        </option>
        {categories?.map((x, index) => (
          <option
            className='top-0 absolute w-auto bg-white'
            value={x.id}
            key={index}
          >
            {x}{' '}
          </option>
        ))}
      </select>
      <input
        type='text'
        name=''
        id=''
        value={keyWord}
        onChange={e => {
          setKeyWord(e.target.value);
        }}
        className=' bg-slate-50 p-1 h-full w-full relative  focus:outline-[#f3a847]'
      />
      {/* auto complet  */}
      <AutoComplet />

      {/* end */}

      <button className=' bg-[#f3a847] h-full rounded-r-md'>
        <i className='fa-solid fa-magnifying-glass p-3'></i>
      </button>
    </div>
  );
}
