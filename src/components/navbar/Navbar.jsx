import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar here */}
      <div className="wrapper">
        <span>yc</span>
        <div className="socials">
          <a href="">
            <img src="/facebook.png" alt="fb" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="ig" />
          </a>
          <a href="">
            <img src="/youtube.png" alt="yt" />
          </a>
          <a href="">
            <img src="/dribble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
