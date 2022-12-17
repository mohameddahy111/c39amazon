import React from 'react';
import { Stor } from '../../context/DataContext';
import { UseAllProducts } from '../../hooks/UseApi';
import ShowWhithCard from '../ShowWhithCard';
import Drawer from './Drawer/Drawer';
import SwiperShow from './swiper/SwiperShow';

export default function HomePage() {
  const { drawerPage } = Stor();

  const { data } = UseAllProducts();
  const skincare = data.filter(x => x.category === 'skincare');
  return (
    <>
      <Drawer />
      <div className={drawerPage ? " h-96 overflow-hidden" :' container  relative'}>
      <div className="w-full relative bg-li shadow-2xl ">
      <SwiperShow data={data}/>

      </div>
      <div className=" relative top-[-170px] z-20  shadow-2xl px-10">
        <ShowWhithCard  data={data} start={0} end={8} />
      </div>
      <div className=" relative top-[-150px]">
        <ShowWhithCard title={'new'} data={data} start={8} end={16} />

      </div>
      <div className=" relative top-[-150px]">

        <ShowWhithCard title={'skincare'} data={skincare} gridImages={true} />
      </div>
      </div>
    </>
  );
}
