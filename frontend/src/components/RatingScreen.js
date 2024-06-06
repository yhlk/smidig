import React, { useState } from 'react';
import './css/RatingScreen.css';
import { RiStarSFill } from "react-icons/ri";


const RatingScreen = ({ onComplete, userName }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    onComplete(); // Trigger the screen change
  };

  return (
    <div className="rating-screen">
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">{userName}</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2 className="question1">Sound?</h2>
      <div className="stars1">
        {[...Array(5)].map((star, index) => {
          const starIndex = index + 1;
          return (
            <span
              key={starIndex}
              className={starIndex <= (hover || rating) ? 'star-on' : 'star-off'}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => setHover(starIndex)}
              onMouseLeave={() => setHover(rating)}
            >
              <RiStarSFill
              className={starIndex <= (hover || rating) ? 'star-on' : 'star-off'} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RatingScreen;