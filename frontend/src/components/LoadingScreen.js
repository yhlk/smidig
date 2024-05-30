import React, { useState, useEffect } from 'react';
import './css/LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete, question }) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timer);
          onLoadingComplete();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="question">{question}</div>
      <div className="stopwatch">
        <div className="spinner"></div>
      </div>
      <div className="dots">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`dot ${index < countdown ? 'active' : ''}`}
          ></div>
        ))}
      </div>
      <div className="waiting-text">Waiting for next question...</div> {/* New div for the waiting text */}
    </div>
  );
};

export default LoadingScreen;
