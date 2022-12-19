import { Navbar, Layout } from './components';
import './App.css';
import { DataContextProvider } from './context/DataContext';
import { Outlet, RouterProvider } from 'react-router-dom';
import Router from './Routes/Router';

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
