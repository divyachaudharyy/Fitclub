import React, { useState } from "react";
import "./Exercises.css";

const Exercises = ({ setExercises, allExercises,exercises }) => {
  const [search, setSearch] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
    setSearchPerformed(true); // ✅ this was missing

    if (search.trim()) {
      const filtered = allExercises.filter((ex) =>
        (ex.name + ex.bodyPart + ex.target + ex.equipment)
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setExercises(filtered);
      setSearch("");
    }
  };
  const handleReset = () => {
    setExercises(allExercises);
    setSearchPerformed(false);
  };

  return (
    <div className="exercises" id="exercises">
      <div className="heading">
        <span className="stroke-text">Awesome exercises you</span>
        <span>Should know</span>
      </div>

      <div className="search" style={{ marginTop: "3rem" }}>
        <form className="search-form" onSubmit={handleSearch}>
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="search-container">
            <div className="search-icon">
              <svg
                className="search-svg"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="search-input"
              placeholder="Search Exercises..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
        {/* 🛑 No Results Found */}
        {searchPerformed && exercises.length === 0 && (
  <div className="no-results">
    <p>No exercises found for your search.</p>
    <button onClick={handleReset} className="  reset-btn">
      Reset
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default Exercises;
