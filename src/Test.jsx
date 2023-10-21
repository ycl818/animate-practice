import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: -100,
      transition: { delay: i * 0.3 },
      // transition: { staggerChildren: 0.2 },
    }),
    hidden: { opacity: 0 },
  };

  const [open, setOpen] = useState();

  const items = ["i1", "i2", "i3", "i4"];

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        variants={variants}
        animate={open ? "visible" : "hidden"}
        drag
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, idx) => (
          <motion.li variants={variants} key={item} custom={idx}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
