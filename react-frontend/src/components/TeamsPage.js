import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';
import { PostLogin } from './PostLoginPage';
import { AdminLogin } from './AdminPage';
export function TeamsPage() {
  return (
    <div>
      <Header />
      <h1 className="heading">Teams</h1>
      <div>
        <PostLogin />
      </div>
      <div style={{ paddingTop: 5 + 'em' }}>
        <AdminLogin />
      </div>
    </div>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
