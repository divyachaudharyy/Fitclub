import React from "react";
import "./Reasons.css";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src="src\assets\image1.png" alt="" />
        <img src="src\assets\image2.png" alt="" />
        <img src="src\assets\image3.png" alt="" />
        <img src="src\assets\image4.png" alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src="src\assets\tick.png" alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src="src\assets\tick.png" alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src="src\assets\tick.png" alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src="src\assets\tick.png" alt="" />
            <span>reliable partners</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--orange",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src="src\assets\nb.png" alt="" />
          <img src="src\assets\adidas.png" alt="" />
          <img src="src\assets\nike.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
