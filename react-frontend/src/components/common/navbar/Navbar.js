import { useState } from 'react';
// import { useAuth } from '../../auth';
import './Navbar.css';
import CookieManager from '../../CookieManager';
import axios from 'axios';

export function Navbar() {
  // const auth = useAuth();
  let login;
  const [adminStatus, setAdminStatus] = useState('null');
  // useEffect(() => {
  //   checkAdminStatus().then((result) => {
  //     if (result) setAdminStatus(result);
  //   });
  // });
  let email = CookieManager.getCookie('email');

  async function checkAdminStatus(email) {
    try {
      // let email = CookieManager.getCookie('email');
      const response = await axios.get('http://localhost:5050/admincheck', {
        params: { email: email }
      });
      return response;
    } catch (error) {
      console.log('Failed to connect to server');
      return false;
    }
  }
  if (email == undefined) {
    login = <a href="/login">Login </a>;
  } else {
    // let adminstatus = checkAdminStatus(email).then();

    // let admin = false;
    checkAdminStatus(email).then(function (result) {
      setAdminStatus(result.data);
    });
    // if (result.data == true) {
    //   login = <a href="/admin">Profile</a>;
    //   admin = true;
    // } else {
    //   login = <a href="/user">Profile</a>;
    //   admin = false;
    // }

    // console.log(help);
    if (adminStatus == true) {
      login = <a href="/admin">Profile</a>;
    } else {
      login = <a href="/user">Profile</a>;
    }
    // if (adminstatus == false) {
    //   login = <a href="/user">Profile</a>;
    // }
    console.log(email);
    // if (adminstatus == true) {
    //   login = <a href="/admin">Profile</a>;
    // } else {
    //   login = <a href="/user">Profile</a>;
    // }
  }
  return (
    <div className="navbar">
      <a href="/">About</a>
      <a href="/teams">Teams</a>
      <a href="/members">Members</a>
      <a href="/news">News</a>
      {login}
    </div>
    // <section style={flex}>
    //   <section className="About-sec">
    //     <a style={headerLinks} href="/" className="About">
    //       about
    //     </a>
    //     <a style={headerLinks} href="/teams" className="Teams">
    //       teams
    //     </a>
    //     <a style={headerLinks} href="/members" className="Members">
    //       members
    //     </a>
    //     <a style={headerLinks} href="/news" className="News">
    //       news
    //     </a>
    //   </section>
    // </section>
  );
}
