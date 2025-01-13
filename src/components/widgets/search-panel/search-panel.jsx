import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./search-panel.css";

const SearchPanel = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimWord = word.trim();
    if (trimWord) {
      navigate(`/word/${trimWord}`);
    }
  };

  const handleEnterDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section className="search-input">
        <div className="input__content">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={handleEnterDown}
            placeholder="Type your word..."
          />
          <span>
            <button onClick={handleSearch}>
              <svg
                className="search-input__icon"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24">
                <path
                  d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z"
                  fill="#000"></path>
              </svg>
            </button>
          </span>
        </div>
      </section>
    </>
  );
};

export default SearchPanel;
