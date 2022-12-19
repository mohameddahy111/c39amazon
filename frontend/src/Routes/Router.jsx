import { createBrowserRouter } from 'react-router-dom';
import { Layout, Prodecter } from '../components';
import {
  CartItems,
  Category,
  CategoryDetiles,
  Detiles,
  Home,
  Login,
  Register,
  Shipping,
} from '../pages';

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
        path: '/shipping',
        element: (
          <Prodecter>
            <Shipping />,
          </Prodecter>
        ),
      },
      {
        path: '/detiles/:id',
        element: <Detiles />,
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
