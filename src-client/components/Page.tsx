import * as React from 'react';
import axios from 'axios';
import { Header } from './Header';

export function Page() {

  return (
    <div>
      <Header title ="Shark Spotting"/>
      <a href="http://localhost:3000/message">Backend API endpoint.</a>
    </div>
  );
}