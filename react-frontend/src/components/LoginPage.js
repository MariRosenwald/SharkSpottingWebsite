import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';
import { LoginForm2 } from './common/login/LoginForm2';

export function LoginPage() {
  return (
    <div>
      <Header />
      <h1 className="heading">Log In</h1>
      <LoginForm2 />
    </div>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
