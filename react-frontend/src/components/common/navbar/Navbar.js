import * as React from 'react';
import './Navbar.css';

const flex = {
  display: 'flex',
  marginTop: '2rem',
  position: 'absolute',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  padding: '2rem'
};
const headerLinks = {
  color: 'white',
  paddingLeft: '10%',
  paddingRight: '10%'
};
export function Navbar() {
  return (
    <section style={flex}>
      <section className="About-sec">
        <a style={headerLinks} href="/" className="About">
          about
        </a>
        <a style={headerLinks} href="/" className="Teams">
          teams
        </a>
        <a style={headerLinks} href="/" className="Members">
          members
        </a>
        <a style={headerLinks} href="/" className="News">
          news
        </a>
      </section>
    </section>
  );
}
