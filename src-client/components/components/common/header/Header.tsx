import * as React from 'react';
import { Navbar } from '../../common';
import './Header.css';

function Header(){
    return(
        <section className="header">
            <section className="topHeader">
                <section className="topHaderLogo">
                    <a href="/" className="header-logo">LOGO</a>
                </section>
                <section className="topHeaderNavbar">
                    <Navbar />
                </section>
            </section>
            <section className="bottomHeader">
                <section className="bottomHeaderFullName">
                    Drones For Marine Science and Agriculture
                </section>
            </section>
        </section>
    );
}

export default Header;