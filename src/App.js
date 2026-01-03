import React, { useState } from "react";
import "./App.css";

const RandomNumberGenerator = function() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = function() {
    const min = 1;
    const max = 100;
    const newNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(newNum);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>RANDOM NUMBER</h1>
        
        <div className="display-area">
          {randomNumber === null ? (
            <p className="placeholder">No number generated yet</p>
          ) : (
            <p className="number">{randomNumber}</p>
          )}
        </div>

        <button onClick={generateNumber} className="generate-btn">
          <span>Generate Random Number</span>
        </button>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;