import React from "react";
import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature" key={i}>
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature} </span>
                  </div>
                ))}
              </div>
              <div>
                <span>See more benefits -&gt; </span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
