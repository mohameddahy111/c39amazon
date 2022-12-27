import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { CategoryBox } from '../../components';
import { UseCategories } from '../../hooks/UseApi';

export default function Category() {
  const params = useParams();
  const { categories } = UseCategories();
  const [all, setAll] = useState([]);

  return (
    <div className='  grid grid-cols-12 '>
      <div className=' col-span-4  lg:col-span-2   border border-black pt-4 px-3 '>
        <h2 className=' text-xl font-semibold py-4 '> Choose Category </h2>
        <hr />
        <ul className=' list-none py-4 '>
          <li className='py-2 capitalize hover:font-semibold '>
            {' '}
            <Link to='/category/'>All</Link>
          </li>
          {categories.map((x, index) => (
            <li className='py-2 capitalize hover:font-semibold ' key={index}>
              <Link to={`/category/${x}`}>{x}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=' col-span-8 lg:col-span-10 bg-slate-200 w-full px-2 '>
        {params.category ? (
          <Outlet />
        ) : (
          <>
            {categories.map((x , index) => (
              <CategoryBox key={index} title={x} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
