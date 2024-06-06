import React, { useEffect, useState } from 'react';
import './css/DecisionScreen.css';
import untilImage from '../until.png';
import imageHide from '../hide.png';
import imageKill from '../kill.png';
import imageDoNothing from '../doNothing.png';
import imageLeave from '../leave.png';

const DecisionScreen = ({ userName, onDecisionComplete }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentImage, setCurrentImage] = useState(untilImage);
  const [hasClicked, setHasClicked] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

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

  const handleOptionClick = (image, button) => {
    if (!hasClicked) {
      setCurrentImage(image);
      setHasClicked(true);
      setClickedButton(button);
    }
  };

  return (
    <div className="decision-screen">
      <div className="header">
        <span className="user-icon">🔹</span>
        <span className="user-label">{userName}</span>
      </div>
      <h1>What should Magnus do next?</h1>
      <div className="options-container">
        <div className="left-options">
          <button
            className={`option-button purple ${clickedButton && clickedButton !== 'hide' ? 'dark' : ''}`}
            onClick={() => handleOptionClick(imageHide, 'hide')}
            disabled={hasClicked}
          >
            HIDE
          </button>
          <button
            className={`option-button red ${clickedButton && clickedButton !== 'kill' ? 'dark' : ''}`}
            onClick={() => handleOptionClick(imageKill, 'kill')}
            disabled={hasClicked}
          >
            KILL
          </button>
        </div>
        <div className="image-placeholder">
          <img src={currentImage} alt="What should Magnus do next decision screen" className="decision-image" />
        </div>
        <div className="right-options">
          <button
            className={`option-button blue ${clickedButton && clickedButton !== 'doNothing' ? 'dark' : ''}`}
            onClick={() => handleOptionClick(imageDoNothing, 'doNothing')}
            disabled={hasClicked}
          >
            DO NOTHING
          </button>
          <button
            className={`option-button green ${clickedButton && clickedButton !== 'leave' ? 'dark' : ''}`}
            onClick={() => handleOptionClick(imageLeave, 'leave')}
            disabled={hasClicked}
          >
            LEAVE
          </button>
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
