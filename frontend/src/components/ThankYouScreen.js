import React from 'react';
import './css/ThankYouScreen.css';

const ThankYouScreen = ({ onReview }) => {
  return (
    <div className="thankyou-screen">
      <div className="header">
        <span className="user-icon">'ikon'</span>
        <span className="user-label">Player</span>
      </div>
      <h1 className="title">Thank you for playing!</h1>
      <button className="review-button" onClick={onReview}>Review</button>
    </div>
  );
};

export default ThankYouScreen;
