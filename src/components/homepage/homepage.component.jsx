import React from "react";
import Background from "../Background/background.component";
import "./homepage.css";
import { Divider } from "@chakra-ui/react";
import Tech from "../Background/tech.component";
import Interest from "../Background/interests.component";
import Other from "../Background/other.component";

function HomePage() {
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
}

export default HomePage;
