import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function SearchBox() {
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryList = async () => {
    await axios
      .get('https://amazon24.p.rapidapi.com/api/category', {
        headers: {
          'X-RapidAPI-Key':
            '3adb4f8f0fmsh0234fc01920d129p144708jsnf25bfe299724',
          'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
        },
      })
      .then(res => setCategoryList(res.data));
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  console.log(categoryList);
  return (
    <div className=' ml-2 h-10  flex items-center w-[600px] '>
      <select
        name='categroy'
        id=''
        className='w-20 pl-2 h-full rounded-l-md focus:outline-[#f3a847] focus:bg-gray-300  bg-gray-100 hover:bg-gray-300 border-r-2 '
      >
        <option value=''> All</option>
        {categoryList.map((x, index) => (
          <option className='top-0 absolute w-auto' value={x.id} key={index}>
            {x.name}{' '}
          </option>
        ))}
      </select>
      <input
        type='text'
        name=''
        id=''
        className=' bg-slate-50 p-1 h-full w-full  focus:outline-[#f3a847]'
      />
      <button className=' bg-[#f3a847] h-full rounded-r-md'>
        <i className='fa-solid fa-magnifying-glass p-3'></i>
      </button>
    </div>
  );
}
