import { createBrowserRouter } from 'react-router-dom';
import { Layout, Prodecter } from '../components';
import {
  CartItems,
  Category,
  CategoryDetiles,
  Detiles,
  FinlPage,
  Home,
  Login,
  Payment,
  PlaseOrder,
  Profile,
  Register,
  Shipping,
} from '../pages';
import SearchPage from '../pages/SearchPage/SearchPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/cart',
        element: <CartItems />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/searchpage/:itemName',
        element: <SearchPage />,
      },
      {
        path: '/shipping',
        element: <Shipping />,
      },
      {
        path: '/PlaseOrder',
        element: <PlaseOrder />,
      },
      {
        path: '/Payment',
        element: <Payment />,
      },
      {
        path: '/finlPage',
        element: <FinlPage />,
      },
      {
        path: '/detiles/:id',
        element: <Detiles />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/category',
        element: <Category />,
        children: [
          {
            path: '/category/:category',
            element: <CategoryDetiles />,
          },
        ],
      },
    ],
  },
]);
export default Router;
