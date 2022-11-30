import * as React from 'react';
import { Navbar } from '../navbar/Navbar';
import './Header.css';

const image = {
  width: '100%',
  height: '300px',
  
};

const centered = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white'
};

const container = {
  position: 'relative',
  textAlign: 'center'
};

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
        <section className="topHeaderNavbar">
          <Navbar />
        </section>
      </section>
      <section className="bottomHeader">
        {/* <section className="bottomHeaderFullName">
          Drones For Marine Science and Agriculture
        </section> */}
        <div style={container}>
          <img alt="Header" src="/resources/ocean.jpg" style={image} />
          <h1 style={centered}>Drones for Marine Science and Agriculture</h1>
        </div>
      </section>
    </section>
  );
}
