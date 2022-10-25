import * as React from 'react';
//import axios from 'axios';
import { Header } from './common';

export function Page() {

  return (
    <div>
      <Header />
      <a href="http://localhost:3000/message">Backend API endpoint.</a>
    </div>
  );
}