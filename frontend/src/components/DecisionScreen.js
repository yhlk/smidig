import React from 'react';
import './css/DecisionScreen.css';

const DecisionScreen = ({ onDecisionComplete }) => {
  const handleOptionClick = () => {
    onDecisionComplete();
  };

  return (
    <div className="decision-screen">
      <div className="header">
        <span className="user-icon">'ikon'</span>
        <span className="user-label">Player</span>
      </div>
      <h1>Question</h1>
      <div className="options-container">
        <button className="option-button hide" onClick={handleOptionClick}>option1</button>
      </div>
    </div>
  );
};

export default DecisionScreen;
