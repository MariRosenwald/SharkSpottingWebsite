import * as React from 'react';
import { Navbar } from '../../common';
import './Header.css';
import CSS from "csstype";

const image: CSS.Properties = {
    width: "100%",
    height: "300px"
};

const centered: CSS.Properties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white"
};

const container: CSS.Properties = {
    position: "relative",
    textAlign: "center",
};

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
                <div style={container}>
                    <img src="/resources/ocean.jpg" style={image}/>
                    <h1 style={centered}>Drones for Marine Science and Agriculture</h1>
                </div>
            </section>
        </section>
    );
}

export default Header;