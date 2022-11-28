import React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';

export function NewsPage() {
  return (
    <div>
      <div>
        <Header />
        <h1 className="heading">News</h1>
      </div>
      <div className="column">
        <div className="card">
          {/* <img src={NP} alt ="MN" width="100" /> */}
          <div className="container">
            <h2 className="h2">Mustang News: Students improve shark-spotting technology</h2>
            <a
              className="newsLink"
              href="https://mustangnews.net/students-improve-shark-spotting-technology/">
              Article
            </a>
            {/* <p><button className="button">Contact</button></p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
