import React, { useEffect, useState } from 'react';
import './css/DecisionScreen.css';
import untilImage from '../until.png';
import imageHide from '../hide.png';
import imageKill from '../kill.png';
import imageDoNothing from '../doNothing.png';
import imageLeave from '../leave.png';

const DecisionScreen = ({ onDecisionComplete, nickname }) => {
  const [timeLeft, setTimeLeft] = useState(100);
  const [currentImage, setCurrentImage] = useState(untilImage);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      onDecisionComplete();
    }
  }, [timeLeft, onDecisionComplete]);

  const handleOptionClick = (image) => {
    setCurrentImage(image);
    setTimeout(() => {
      onDecisionComplete();
    }, 5000); // 5 seconds
  };

  return (
    <div className="decision-screen">
      <div className="header">
        <span className="user-icon">🔹</span>
        <span className="user-label">{nickname}</span>
      </div>
      <h1>What should Magnus do next?</h1>
      <div className="options-container">
        <div className="left-options">
          <button className="option-button purple" onClick={() => handleOptionClick(imageHide)}>HIDE</button>
          <button className="option-button red" onClick={() => handleOptionClick(imageKill)}>KILL</button>
        </div>
        <div className="image-placeholder">
          <img src={currentImage} alt="What should Magnus do next decision screen" className="decision-image" />
        </div>
        <div className="right-options">
          <button className="option-button blue" onClick={() => handleOptionClick(imageDoNothing)}>DO NOTHING</button>
          <button className="option-button green" onClick={() => handleOptionClick(imageLeave)}>LEAVE</button>
        </div>
      </div>
      <div className="timer">
        <div className="clock"></div>
        Time left: <span id="timer">{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span> sec
      </div>
    </div>
  );
};

export default DecisionScreen;
