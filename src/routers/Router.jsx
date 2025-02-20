import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Preview from '../pages/Preview/Preview';
import Account from '../pages/mypage/accountInfo/Account';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/makereadwith/:isbn" element={<MakeReadwith />} />
      <Route path="/rooms/:roomId" element={<RoomInfo />} />
      <Route path="/info/:isbn" element={<BookInfo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/category" element={<Category />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/record" element={<Record />} />
      <Route path="/readinglog" element={<ReadingLog nickname="TestUser" />} />
      <Route path="/rooms/:roomId/info" element={<ReadWith />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/calendar" element={<ReadingCalendar />} />
      <Route path="/mypage/collector" element={<Collector />} />
      <Route path="/rooms/:roomId/preview" element={<Preview />} />
      <Route path="/mypage/account" element={<Account />} />
    </Routes>
  );
}
