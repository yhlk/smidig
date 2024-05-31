import React, { useEffect } from 'react';
import './css/LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1000); // Prøvde å legge til en timer for en eventuell loading screen? idk

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="header">
        <span className="user-icon">'ikon'</span>
        <span className="user-label">Player</span>
      </div>
      <h1 className="title">LOADING</h1>
      <p>placeholder</p>
    </div>
  );
};

export default LoadingScreen;
