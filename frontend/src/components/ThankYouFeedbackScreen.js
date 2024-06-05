import React from 'react';
import './css/ThankYouFeedbackScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';

const ThankYouFeedbackScreen = ({nickname}) => {
  return (
    <div className="thankyou-feedback-screen">
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">{nickname}</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2>Thank you for your feedback</h2>
      
    </div>
  );
};

export default ThankYouFeedbackScreen;
