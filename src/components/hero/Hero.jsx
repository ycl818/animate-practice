import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>YCL</h2>
          <h1>Aspiring Fronted Engineer</h1>
          <div className="buttons">
            <button>See the latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
