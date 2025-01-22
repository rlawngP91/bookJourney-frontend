import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Main from '../pages/Main/Main';
import MakeReadwith from '../pages/makeReadwith/makeReadwith';
import Test from '../pages/Test';
import Info from '../pages/Info/Info';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/makeReadwith',
      element: <MakeReadwith />,
    },
    {
      path: '/info',
      element: <Info />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
