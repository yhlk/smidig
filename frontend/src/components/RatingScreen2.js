import React, { useState } from 'react';
import './css/RatingScreen2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';

const RatingScreen2 = ({ onComplete }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    onComplete(); // Trigger the screen change
  };

  return (
    <div className="rating-screen2">
      <div className="Player-icon">
        <span className="user-icon">🔹</span>
        <span className="user-label">Player</span>
      </div>
      <h1 className="title">LOADING</h1>
      <h2 className='question'>Theater content?</h2>
      <div className="stars">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <span
              key={index}
              className={index <= (hover || rating) ? 'star-on' : 'star-off'}
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <FontAwesomeIcon icon={index <= (hover || rating) ? solidStar : regularStar} /> 
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RatingScreen2;
