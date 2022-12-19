import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/index';
import { DataContextProvider } from '../../context/DataContext';

export default function Layout() {
  return (
    <>
    <DataContextProvider>
      <Navbar />
      <Outlet/>
    </DataContextProvider>
    </>
  );
}
