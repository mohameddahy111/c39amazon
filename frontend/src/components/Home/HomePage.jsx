import React from 'react';
import { Stor } from '../../context/DataContext';
import { UseAllProducts } from '../../hooks/UseApi';
import SwiperSlider from '../Category/SwiperSlider';
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
      <div className={drawerPage ? ' h-96 overflow-hidden' : ' relative'}>
        <div className='w-full relative '>
          <SwiperShow data={data} />
        </div>
        <div className=' relative '>
          <ShowWhithCard data={data} start={0} end={8} />
        </div>
        <div className=' relative '>
          <ShowWhithCard title={'new'} data={data} start={8} end={16} />
        </div>
        <div className=' relative mb-10'>
          <SwiperSlider data={skincare} showNumber={4} title={"skincare"} showLink />
          {/* <ShowWhithCard title={'skincare'} data={skincare} gridImages={true} /> */}
        </div>
      </div>
    </>
  );
}
