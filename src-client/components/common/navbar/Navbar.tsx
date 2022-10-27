import * as React from "react";
import "./Navbar.css";
import CSS from "csstype";
import { isWhiteSpaceLike } from "typescript";

const flex: CSS.Properties = {
  display: "flex",
  marginTop: "2rem",
  position: "absolute",
  verticalAlign: "middle",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  padding: "2rem",
};
const headerLinks: CSS.Properties = {
  color: "white",
  margin: "20%",
};
function Navbar() {
  return (
    <section style={flex}>
      <section className="About-sec">
        <a style={headerLinks} href="/" className="About">
          about
        </a>
      </section>
      <section className="Teams-sec">
        <a style={headerLinks} href="/" className="Teams">
          teams
        </a>
      </section>
      <section className="Memebers-sec">
        <a style={headerLinks} href="/" className="Members">
          members
        </a>
      </section>
      <section className="News-sec">
        <a style={headerLinks} href="/" className="News">
          news
        </a>
      </section>
    </section>
  );
}

export default Navbar;
