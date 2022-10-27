import * as React from "react";
import { Header } from "./common/";
import CSS from "csstype";

const about: CSS.Properties = {
  font: "Arial Black",
  fontSize: "350%",
  textAlign: "center",
  color: "#005D71",
  paddingBottom: "20px",
  borderBottom: ".25rem solid #C8A326",
  borderBottomColor: "#C8A326",
  boxShadow: "0 4px 4px -4px black",
  marginLeft: "33%",
  marginRight: "33%",
};
export function AboutPage() {
  return <h1 style={about}>About Us</h1>;
}
