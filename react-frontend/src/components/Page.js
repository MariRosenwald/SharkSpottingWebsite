import * as React from 'react';
//import axios from 'axios';
//import { Header } from './common/header/Header';
import { AboutPage } from './AboutPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NewsPage } from "./NewsPage"
import { TeamsPage } from "./TeamsPage"
import { MembersPage } from "./MembersPage"

export function Page() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
