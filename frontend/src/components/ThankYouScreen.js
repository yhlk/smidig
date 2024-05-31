import React from 'react';
import './css/ThankYouScreen.css';

const ThankYouScreen = ({ onReview }) => {
  return (
    <>
      <div className="thankyou-screen">
        <div className="header">
          <h1 className='H1'> Thank you for playing!</h1>
          <h1 className='MM'>please rate your</h1>
          <h1 className='H3'>experience</h1>
        </div>
        <button className="review-button" onClick={onReview}>Review</button>
      </div>
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">Player</span>
      </div>
    </>
  );
};
export default ThankYouScreen;