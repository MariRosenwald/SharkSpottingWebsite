import * as React from 'react';
//import axios from 'axios';
import { Header } from './common/header/Header';
import './Pages.css';
import { LoginForm } from './common/login/LoginForm';

export function LoginPage() {
  return (
    <div>
      <Header />
      <h1 className="heading">Log In</h1>
      <LoginForm />
    </div>
  );
}

//<a href="http://localhost:3000/message">Backend API endpoint.</a>
