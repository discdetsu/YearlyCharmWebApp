import React from "react";
import ParallaxPics from "./ParallaxPics";

const Landing = () => {
  return (
    <div id="section">
      <div id="banner">
        <h1 id="text">YEARLY</h1>
        <hr />
        <div id="sub-banner">
          <h2>PET LOVER</h2>
          <div className="vl"></div>
          <h2>Charming</h2>
          <div className="vl"></div>
          <h2>CATTERY</h2>
        </div>
      </div>
      <ParallaxPics />
    </div>
  );
};

export default Landing;
