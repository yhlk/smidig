import React from 'react';
import './css/ThankYouFeedbackScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';

const ThankYouFeedbackScreen = () => {
  return (
    <div className="thankyou-feedback-screen">
      <div className="header">
        <span className="user-icon">'ikon'</span>
        <span className="user-label">Player</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2 className='feedback'>Thank you for your feedback</h2>
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span key={index}>
            <FontAwesomeIcon icon={index < 3 ? solidStar : regularStar} /> 
          </span>
        ))}
      </div>
    </div>
  );
};

export default ThankYouFeedbackScreen;
