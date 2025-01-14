import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Main from '../pages/Main/Main';
import MakeReadwith from '../pages/makeReadwith/makeReadwith';
import Test from '../pages/Test';

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
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
