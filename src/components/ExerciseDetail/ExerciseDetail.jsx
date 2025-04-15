import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchData,
  exerciseOptions,
  youtubeOptions,
} from "../../utils/fetchData";
import "./ExerciseDetail.css";
import { programsData } from "../../data/programsData";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const allExercises = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
  
      const selectedExercise = allExercises.find((ex) => ex.id === id);
  
      // ✅ If no match found, stop and handle it
      if (!selectedExercise) {
        console.warn(`Exercise with ID ${id} not found`);
        setExerciseDetail(null); // or handle with an error state
        setYoutubeVideos([]);
        setSimilarExercises([]);
        return;
      }
  
      setExerciseDetail(selectedExercise);
  
      // YouTube Search
      const youtubeData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${selectedExercise.name} exercise`,
        youtubeOptions
      );
      setYoutubeVideos(youtubeData.contents);
  
      // Similar Exercises
      const filtered = allExercises.filter(
        (ex) =>
          ex.target === selectedExercise.target && ex.id !== selectedExercise.id
      );
      setSimilarExercises(filtered.slice(0, 6)); // Limit to 6
    };
  
    fetchDetails();
  }, [id]);
  
    

  if (!exerciseDetail) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="exercise-detail-container">
      <div className="main">
        <div className="exercise-gif-big">
          <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name} />
        </div>
        <div className="instructions">
          
          <h2>
            {programsData[0].image}
            {/* This directly renders the first inline SVG element */}
            {exerciseDetail.name}
          </h2>

          <ul>
            {exerciseDetail.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="exercise-info">
        <h3>Watch "{exerciseDetail.name}" Exercise Videos</h3>
        <div className="video-section">
          {youtubeVideos?.slice(0, 3).map((video, i) => (
            <a
              key={i}
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={video.video.thumbnails[0].url} alt="video thumbnail" />
              <p>{video.video.title}</p>
            </a>
          ))}
        </div>

        <h3>Similar Exercises</h3>
        <div className="similar-grid">
          {similarExercises.map((ex) => (
            <Link  key={ex.id} to={`/exercise/${ex.id}`}>
              <img src={ex.gifUrl} alt={ex.name} />
              <p>{ex.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
