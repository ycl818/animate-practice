import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: {
      opacity: 1,
      x: 500,
      transition: { type: "spring", stiffness: 100, damping: 100 },
    },
    hidden: { opacity: 0 },
  };

  const [open, setOpen] = useState();

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        animate={open ? "visible" : "hidden"}
        drag
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
    </div>
  );
};

export default Test;
