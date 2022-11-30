import * as React from 'react';
//import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NewsPage } from './NewsPage';
import { TeamsPage } from './TeamsPage';
import { MembersPage } from './MembersPage';
import { PostLogin } from './PostLoginPage';
import { AdminPage } from './AdminPage';
import { AuthProvider } from './auth';

export function Page() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<PostLogin />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
