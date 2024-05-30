import React from 'react';
import './css/ThankYouScreen.css';

const ThankYouScreen = ({ onReview }) => {
  return (
    <div className="thankyou-screen">
      <h1 className="title">Thank you for playing!</h1>
      <h2 className="subtitle">Please rate your experience</h2> 
      <button className="review-button" onClick={onReview}>Review</button>
    </div>
  );
};

export default ThankYouScreen;