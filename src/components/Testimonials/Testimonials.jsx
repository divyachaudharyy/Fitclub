import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
// import { testimonialsData } from "../../utils/data/testimonialsData";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;
  const transition = { type: "spring", duration: 2 };

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review} </span>
        <span className="name-job">
          <span style={{ color: "var(--orange" }}>
            {testimonialsData[selected].name}&nbsp;&nbsp;
          
          </span>
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(length - 1)
                : setSelected((prev) => prev - 1);
            }}
            src="src\assets\leftArrow.png"
            alt=""
          />
          <img
            onClick={() => {
              selected === length - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src="src\assets\rightArrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
