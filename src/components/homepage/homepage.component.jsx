import React from "react";
import Background from "../background/background.component";
import { Divider } from "@chakra-ui/react";
import Tech from "../background/tech.component";
import Interest from "../background/interests.component";
import Other from "../background/other.component";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="hpContainer">
      <Background />
      <br />
      <Divider />
      <br />
      <Tech />
      <br />
      <Divider />
      <br />
      <Interest />
      <br />
      <Divider />
      <br />
      <Other />
      <br />
      <p style={{ position: "absolute" }}>&copy; 2024 Funmilayo Olaiya</p>
    </div>
  );
};

export default Homepage;
