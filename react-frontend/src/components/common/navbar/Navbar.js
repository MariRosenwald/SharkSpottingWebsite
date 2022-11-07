import * as React from 'react';
import './Navbar.css';



export function Navbar() {
  return (
    <div className="navbar">
      <a href="/">About</a>
      <a href="/teams">Teams</a>
      <a href="/members">Members</a>
      <a href="/news">News</a>
      <a href="/login">Login</a>
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
