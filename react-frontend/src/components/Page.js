import * as React from 'react';
//import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NewsPage } from './NewsPage';
import { TeamsPage } from './TeamsPage';
import { MembersPage } from './MembersPage';

export function Page() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
