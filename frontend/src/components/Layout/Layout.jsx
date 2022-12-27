import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components/index';
import { DataContextProvider } from '../../context/DataContext';

export default function Layout() {
  return (
    <>
    <DataContextProvider>
      <Navbar />
      <Outlet/>
      <Footer/>
    </DataContextProvider>
    </>
  );
}
