import React, { useState } from 'react';
import './css/RatingScreen2.css';

const RatingScreen2 = ({ onComplete }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index) => {
        setRating(index);
        onComplete(index);
    };

    return (
        <div className="rating-screen2">
        <div className="header">
            <span className="user-icon">'ikon'</span>
            <span className="user-label">Player</span>
        </div>
        <h1 className="title">LOADING</h1>
        <h2>Spørsmål 2?</h2>
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
                x
                </span>
            );
            })}
        </div>
        </div>
    );
};

export default RatingScreen2;