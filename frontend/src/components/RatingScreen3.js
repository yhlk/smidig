import React, { useState } from 'react';
import './css/RatingScreen3.css';

const RatingScreen3 = ({ onComplete, ratings }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleClick = (index) => {
        setRating(index);
        onComplete(index, feedback);
    };

    return (
        <div className="rating-screen3">
        <div className="header">
            <span className="user-icon">'ikon'</span>
            <span className="user-label">Player</span>
        </div>
        <h1 className="title">LOADING</h1>
        <h2>Spørsmål 3?</h2>
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
        <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Leave your feedback here"
        />
        </div>
    );
};

export default RatingScreen3;