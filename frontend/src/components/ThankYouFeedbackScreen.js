import React from 'react';
import './css/ThankYouFeedbackScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';

const ThankYouFeedbackScreen = () => {
  return (
    <div className="thankyou-feedback-screen">
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">Player</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2 className='feedback'>Thank you for your feedback</h2>
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span key={index}>
            <FontAwesomeIcon icon={"fa-regular fa-star"} /> 
          </span>
        ))}
      </div>
    </div>
  );
};

export default ThankYouFeedbackScreen;