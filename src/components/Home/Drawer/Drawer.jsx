import React, { useState } from 'react';
import DrawerBady from './DrawerBady';
import DrawerHead from './DrawerHead';
import $ from 'jquery';
import style from '../../../Sass/globel.module.scss';
import { Stor } from '../../../context/DataContext';

export default function Drawer() {
  const { drawerPage, setDrawerPage } = Stor();

  const openDrawer = () => {
    setDrawerPage(true);
    $('#aa').show(500, () => {
      $('#aa').fadeIn(1000);
    });
  };

  return (
    <div className='py-2 pl-3 bg-[#203040] text-white flex items-center  '>
      <button
        className='flex as items-center gap-1 border border-transparent hover:border-white p-2 '
        onClick={() => {
          openDrawer();
        }}
      >
        <i className='fa-solid fa-bars fa-xl'></i>
        <p>All</p>
      </button>
      {/* {drawerPage && ( */}
      <div
        className={`absolute  top-0 bottom-0 left-0 right-0  bg-[#203040] bg-opacity-60 overflow-hidden ${style.aa} z-50 `}
        id='aa'
      >
        <div className=' flex  items-start gap-5  '>
          <div className='w-[350px]'>
            <DrawerHead />
            <DrawerBady />
          </div>
          <div className=''>
            <button
              onClick={() => {
                $('#aa').fadeOut(500, () => {
                  $('#aa').hide(1000, () => {
                    setDrawerPage(false);
                  });
                });
              }}
            >
              <i className='fa-solid fa-xmark text-2xl pt-3'></i>
            </button>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
