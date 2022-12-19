import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/data';
import { UseCategories } from '../../../hooks/UseApi';

export default function DrawerBady() {
  const { categories } = UseCategories();
  const [numShow, setNumShow] = useState(6);
  const showCartegories = text => {
    if (text === 'Show All') {
      setNumShow(categories.length);
    } else {
      setNumShow(6);
    }
  };
  return (
    <>
      <ul className=' bg-white text-black py-2 px-4 overflow-y-auto h-screen pb-[100px]'>
        <li>
          <h3 className=' font-semibold text-xl'>Digital Content & Devices</h3>
        </li>
        {data.digitalContent.map((x, index) => (
          <li className=' flex justify-between items-center py-3' key={index}>
            <div className=''>
              <h4 className=' font-semibold'>{x.name} </h4>
            </div>
            <div className=''>{x.icone}</div>
          </li>
        ))}
        <hr />
        <li className='py-3'>
          <h3 className=' font-semibold text-xl'>Shop By Department</h3>
        </li>
        {categories.slice(0, numShow).map((x, index) => (
          <li key={index}>
              <Link to={`/category/${x}`}>
            <div className=' flex justify-between p-3 capitalize font-semibold'>
                <p className=' text-sm'>{x} </p>
                <i className='fa-solid fa-angle-right text-gray-400'></i>{' '}
            </div>
              </Link>
          </li>
        ))}
        <li className='p-3 cursor-pointer '>
          <p
            className=' capitalize'
            onClick={e => showCartegories(e.target.innerText)}
          >
            {numShow === categories.length ? 'show Less' : 'show all'}{' '}
          </p>
        </li>
        <hr />
      </ul>
    </>
  );
}
