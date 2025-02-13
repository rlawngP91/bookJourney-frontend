import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Main from '../pages/Main/Main';
import Test from '../pages/Test';
import MakeReadwith from '../pages/MakeReadwith/MakeReadwith';
import RoomInfo from '../pages/Info/RoomInfo';
import BookInfo from '../pages/Info/BookInfo';
import Login from '../pages/login/Login';
import Onboarding from '../pages/onboarding/Onboarding';
import Signup from '../pages/signup/Signup';
import Category from '../pages/category/Category';
import Profile from '../pages/profile/Profile';
import Home from '../pages/home/Home';
import Search from '../pages/search/search';
import Bookmark from '../pages/bookmark/Bookmark';
import Record from '../pages/record/Record';
import ReadingLog from '../pages/readingLog/ReadingLog';
import ReadWith from '../pages/ReadWith/ReadWith';
import Mypage from '../pages/mypage/mypage';
import ReadingCalendar from '../pages/mypage/readingcalendar/ReadingCalendar';
import Collector from '../pages/collector/Collector';

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
      path: '/makereadwith/:isbn',
      element: <MakeReadwith />,
    },
    {
      path: '/rooms/:roomId',
      element: <RoomInfo />,
    },
    {
      path: '/info/:isbn',
      element: <BookInfo />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/onboarding',
      element: <Onboarding />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/category',
      element: <Category />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/search',
      element: <Search />,
    },
    {
      path: '/bookmark',
      element: <Bookmark />,
    },
    {
      path: '/record',
      element: <Record />,
    },
    {
      path: '/readinglog',
      element: <ReadingLog nickname="TestUser" />,
    },
    {
      path: '/rooms/:roomId/info',
      element: <ReadWith />,
    },
    {
      path: '/mypage',
      element: <Mypage />,
    },
    {
      path: '/mypage/calendar',
      element: <ReadingCalendar />,
    },

    {
      path: '/mypage/collector',
      element: <Collector />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
