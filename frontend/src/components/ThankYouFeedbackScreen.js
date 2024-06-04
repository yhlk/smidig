import React from "react";
import "./css/ThankYouFeedbackScreen.css";

const ThankYouFeedbackScreen = () => {
  return (
    <div className="thankyou-feedback-screen">
      <div className="header">
        <span className="user-icon">'ikon'</span>
        <span className="user-label">Player</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2>Takk</h2>
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
