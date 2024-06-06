import React from 'react';
import './css/ThankYouFeedbackScreen.css';
import {RiStarFill} from "react-icons/ri"

const ThankYouFeedbackScreen = ({userName}) => {
  return (
    <div className="thankyou-feedback-screen">
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">{userName}</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2 className='feedback'>Thank you for your feedback</h2>
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span key={index}><RiStarFill className='stars'/></span>
        ))}
      </div>
    </div>
  );
};

export default ThankYouFeedbackScreen;
