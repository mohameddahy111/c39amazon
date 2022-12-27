import React from 'react';
import Cards from './Home/Cards/Cards';

export default function ShowWhithCard({title , data ,start ,end ,gridImages}) {
  return (
    <>
    <div className="">
        <h2 className={` capitalize text-2xl font-semibold p-3`}>{title} </h2>
    </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 '>
      {data?.slice(start , end ).map((x, index)=>(
        <Cards key={index} gridImage={gridImages} data={x} />
      ))}
      </div>
    </>
  );
}
