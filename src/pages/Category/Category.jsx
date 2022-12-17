import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { UseCategories,  } from '../../hooks/UseApi';

export default function Category() {
  const params = useParams();
  const { categories } = UseCategories();
  const [all, setAll] = useState([]);


  return (
    <div className=' container grid grid-cols-12 '>
      <div className=' col-span-2   border border-black pt-4 px-3 '>
        <h2 className=' text-xl font-semibold py-4 '> Choose Category </h2>
        <hr />
        <ul className=' list-none py-4 '>
          <li className='py-2 capitalize hover:font-semibold '>
            {' '}
            <Link to='/category/'>All</Link>
          </li>
          {categories.map((x, index) => (
            <li className='py-2 capitalize hover:font-semibold ' key={index}>
              <Link to={`/category/${x}` }>{x}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=' col-span-10 bg-slate-200 w-ful px-2 '>
        {params.category ? <Outlet /> : ''}
      </div>
    </div>
  );
}
