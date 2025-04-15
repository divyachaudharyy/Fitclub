import React from "react";
import "./ExerciseGif.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const ExerciseGif = ({ exercise }) => {
  return (
    
    <Tilt glareEnable={true} glareMaxOpacity={0} scale={1.05}>
      
      <div className="exercise-card">
        <Link to={`/exercise/${exercise.id}`} className="exercise-link">
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="exercise-gif"
          />
          <h4 className="exercise-name">{exercise.name}</h4>
          <div className="exercise-meta">
            <span>{exercise.bodyPart}</span>
            <span>{exercise.target}</span>
          </div>
         
        </Link>
      </div>
    </Tilt>
  );
};

export default ExerciseGif;


