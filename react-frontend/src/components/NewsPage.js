import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';

export function NewsPage() {
  return (
    <div>
      <Header />
      <h1 className="heading">News</h1>
    </div>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
