import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards({ data, gridImage }) {
  return (
    <>
      <div className={` w-full relative shadow-xl my-5 space-x-2 space-y-2 bg-gray-50 ${gridImage ? "h-[400px]": 'h-[350px]'  } overflow-hidden `} >
        <Link to={`/detiles/${data.id}`}>
          <div className=''>
            <h3 className=' pl-3 capitalize font-semibold py-2 text-2xl'>
              {data.title}{' '}
            </h3>
          </div>
          <div className=' flex justify-center items-center'>
            {gridImage === true ? (
              <div className="container grid grid-cols-2 h-[265px] overflow-hidden ">
                {data.images.slice(0,4).map((x , index)=>(
                    <img key={index} src={x} alt='' className='h-[150px] p-3  skew-y-6 hover:scale-105 transition-all  ' />
                ))}
              </div>
            ) : (
              <img src={data.thumbnail} alt='' className='h-[200px] p-3 hover:scale-105 transition-all' />
            )}
          </div>
        </Link>
        <div className=' py-2 font-medium text-sm capitalize text-[#3194bb] hover:text-red-400 hover:underline absolute bottom-5 left-3 '>
          <Link to={`/category/${data.category}`}>
            see more in {data.category}
          </Link>
        </div>
      </div>
    </>
  );
}
