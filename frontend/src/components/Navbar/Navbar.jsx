import React from 'react';
import style from '../Navbar/navbar.module.scss';
import CartLogo from './CartLogo';
import FlagCun from './FlagCun';
import Logo from './Logo';
import RerutrnOrders from './RerutrnOrders';
import SearchBox from './SearchBox';
import UserInfo from './UserInfo';
import UserLoction from './UserLoction';

export default function Navbar() {
  return (
    <>
      <div className=' w-full  bg-[#231f20]  flex items-center justify-between'>
        <Logo />
        <UserLoction />
        <SearchBox />
        <FlagCun />
        <UserInfo/>
        <RerutrnOrders/>
        <CartLogo/>
      </div>
    </>
  );
}
