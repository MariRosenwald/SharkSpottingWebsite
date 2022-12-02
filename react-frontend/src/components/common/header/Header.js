import * as React from 'react';
import { Navbar } from '../navbar/Navbar';
import './Header.css';


const topHeader = {
  backgroundColor: '#005D71',
  color: 'white',
  // marginLeft: '-10%',
  // marginRight: '-10%',
  // marginTop: '-.5rem',
  paddingLeft: '1%',
  paddingTop: '.75rem',
  top: '-1rem',
  paddingBottom: '1rem',
  display: 'flex',
  verticalAlign: 'middle'
};

const logo = {
  color: 'white',
  fontFamily: 'trattatello',
  verticalAlign: 'middle',
  fontSize: '200%'
};

export function Header() {
  return (
    <section className="header">
      <section style={topHeader} className="topHeader">
        <section className="topHeaderLogo">
          <a style={logo} href="/" className="header-logo">
            SharkSpotting
          </a>
        </section>
        <section style={{width:'68%', textAlign:'center', paddingTop: '0.75rem'}} className="topHeaderNavbar">
          <Navbar />
        </section>
      </section>

    </section>
  );
}
