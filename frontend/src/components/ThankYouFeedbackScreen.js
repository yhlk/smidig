import React from 'react';
import './css/ThankYouFeedbackScreen.css';

const ThankYouFeedbackScreen = () => {
  return (
    <div className="thankyou-feedback-screen">
      <div className="header">
        <span className="user-icon">'ikon'</span>
        <span className="user-label">Player</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2>Takk for tilbakemeldingene dine!</h2>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="star">&#9733;</span>
        ))}
      </div>
    </div>
  );
};

export default ThankYouFeedbackScreen;