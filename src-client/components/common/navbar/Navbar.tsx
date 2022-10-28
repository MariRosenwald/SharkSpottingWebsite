import * as React from "react";
import "./Navbar.css";
import CSS from "csstype";

const flex: CSS.Properties = {
  display: "flex",
  marginTop: "2rem",
  position: "absolute",
  left: "45%",
  transform: "translate(-50%, -50%)",
  color: "white",
  padding: "2rem",
};
const headerLinks: CSS.Properties = {
  color: "white",
  paddingLeft: "10%",
  paddingRight: "10%",
};
function Navbar() {
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

export default Navbar;
