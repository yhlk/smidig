import React from 'react';
import './css/ThankYouScreen.css';

const ThankYouScreen = ({ onReview, userName }) => {
  return (
    <><div className="thankyou-screen">
      <h1 className="title">Thank you for playing!</h1>
      <h2 className="subtitle">please rate your experience</h2>
      <button className="review-button" onClick={onReview}>Review</button>
    </div><div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">{userName}</span>
      </div></>
  );
};

export default ThankYouScreen;