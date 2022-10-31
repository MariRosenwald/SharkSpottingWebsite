import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import { AboutPage } from './AboutPage';

export function Page() {
  return (
    <div>
      <Header />
      <div>
        <AboutPage />
      </div>
    </div>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
