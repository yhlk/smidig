import React from 'react';
import './css/ThankYouScreen.css';

const ThankYouScreen = ({ onReview }) => {
  return (
    <div className="thankyou-screen">
      <div className="header">
        <h1 className='H1'> Thank you for playing!</h1>
        <h1 className='MM'>please rate your</h1>
        <h1 className='H3'>experience</h1>
        <span className="user-icon">'ikon'</span>
        <span className="user-label">Player</span>
      </div>
      <button className="review-button" onClick={onReview}>Review</button>
    </div>
  );
};

export default ThankYouScreen;
