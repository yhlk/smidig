import React from 'react';
import './css/ThankYouFeedbackScreen.css';

const ThankYouFeedbackScreen = ({userName}) => {
  return (
    <div className="thankyou-feedback-screen">
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">{userName}</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2>Thank you for your feedback</h2>
    </div>
  );
};

export default ThankYouFeedbackScreen;
