import React, { useState, useEffect } from "react";
import "./css/LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete, question, userName }) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          return 10; // Reset countdown to 10 for infinite loading
        }
      });
    }, 1000);

    const timeout = setTimeout(() => {
      onLoadingComplete(); // Transition to the next screen after 5 seconds
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">{userName}</span>
      </div>
      <div className="question">{question}</div>
      <div className="stopwatch">
        <div className="spinner"></div>
      </div>
      <div className="dots">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`dot ${index < countdown ? "active" : ""}`}
          ></div>
        ))}
      </div>
      <div className="waiting-text">Waiting for next question...</div>
    </div>
  );
};

export default LoadingScreen;
