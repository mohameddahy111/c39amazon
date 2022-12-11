import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components';
import { Detiles, Home } from '../pages';

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
        path: '/detiles/:id',
        element: <Detiles />,
      },
    ],
  },
]);
export default Router;
