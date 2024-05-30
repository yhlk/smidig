import React from 'react';
import './css/DecisionScreen.css';
import untilImage from '../until.png'; // Adjust the path according to your project structure

const DecisionScreen = ({ onDecisionComplete }) => {
  const handleOptionClick = () => {
    onDecisionComplete();
  };

  return (
    <div className="decision-screen">
      <div className="header">
        <span className="user-icon">🔹</span>
        <span className="user-label">Player</span>
      </div>
      <h1>What should Magnus do next?</h1>
      <div className="options-container">
        <div className="left-options">
          <button className="option-button purple" onClick={handleOptionClick}>HIDE</button>
          <button className="option-button red" onClick={handleOptionClick}>KILL</button>
        </div>
        <div className="image-placeholder">
          {/* Add the image here */}
          <img src={untilImage} alt="What should Magnus do next decision screen" className="decision-image" />
        </div>
        <div className="right-options">
          <button className="option-button blue" onClick={handleOptionClick}>DO NOTHING</button>
          <button className="option-button green" onClick={handleOptionClick}>LEAVE</button>
        </div>
      </div>
      <div className="timer">
        Time left: <span id="timer">00:20</span> sec
      </div>
    </div>
  );
};

export default DecisionScreen;
