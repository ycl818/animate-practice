import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          yc
        </motion.span>
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
