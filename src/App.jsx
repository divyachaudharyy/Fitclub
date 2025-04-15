import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import ScrollToTop from "./ScrollToTop";
import Programs from "./components/Programs/Programs";
import { Route, Routes } from "react-router-dom";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import Exercises from "./components/Exercises/Exercises";
import ExerciseGif from "./components/ExerciseGif/ExerciseGif";
import { Pagination } from "@mui/material";
import "./App.css";
import { exerciseOptions, fetchData } from "./utils/fetchData";
import ExerciseDetail from "./components/ExerciseDetail/ExerciseDetail";
// import Loader from "./components/Loader";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [allExercises, setAllExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 4;

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=100", // 🔥 Increase limit here
        exerciseOptions
      );
      console.log("Fetched Exercises:", data.length);
      setExercises(data);
      setAllExercises(data);
    };
    getExercises();
  }, []);

  // Pagination logic
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1280, behavior: "smooth" }); // Optional: auto-scroll to results
  };
  // if (!currentExercises.length) return <Loader />;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Hero />
              <Exercises
                setExercises={setExercises}
                allExercises={allExercises}
                exercises={exercises}
              />

              <div className="exercise-grid large">
                <hr className="Apphr" />
                {currentExercises.map((ex) => (
                  <ExerciseGif key={ex.id} exercise={ex} />
                ))}
              </div>

              <div className="pagination-container">
                <Pagination
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      border: "1px solid #fff",
                      transition: "all 0.3s ease",
                    },
                    "& .Mui-selected": {
                      backgroundColor: "#f48915",
                      color: "#fff",
                      fontWeight: "bold",
                    },
                    "& .MuiPaginationItem-root:hover": {
                      backgroundColor: "#f48915",
                      borderColor: "#f48915",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                      color: "#fff",
                      border: "none",
                    },
                    "& .MuiPaginationItem-icon": {
                      color: "#fff",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      border: "none",
                    },
                    "& .MuiPaginationItem-previousNext": {
                      border: "none",
                      backgroundColor: "transparent",
                    },
                  }}
                  count={Math.ceil(exercises.length / exercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  color="orange"
                  size="large"
                />
              </div>

              <Programs />
              <Reasons />
              <Plans />
              <Testimonials />
              <Join />
              <Footer />
            </div>
          }
        />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </>
  );
};

export default App;
