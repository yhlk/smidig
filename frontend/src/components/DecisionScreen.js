import React, { useEffect, useState } from "react";
import "./css/DecisionScreen.css";
import untilImage from "../until.png"; // Adjust the path according to your project structure

const DecisionScreen = ({ userName, onDecisionComplete }) => {
  const [timeLeft, setTimeLeft] = useState(100);

  // const [question, setQuestion] = useState(null);
  // //Making a function to fetch the questions to the frontend
  // const fetchQuestion = async () => {
  //   try{ 
  //     const respone = await fetch ('');
  //     const data = await respone.json(); 
  //     setQuestion(data); 
  //   }catch (error) {
  //     console.error('Error fetching questions:', error);
  //   }
  // }; 

  // useEffect( () => {
  //   fetchQuestion();
  // }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      onDecisionComplete();
    }
  }, [timeLeft, onDecisionComplete]);

  const handleOptionClick = () => {
    onDecisionComplete();
  };

  return (
    <div className="decision-screen">
      <div className="header">
        <span className="user-icon">🔹</span>
        <span className="user-label">{userName}</span>
        <h1>What should Magnus do next?</h1>
      </div>
      <div className="options-container">
        <div className="left-options">
          <button className="option-button purple" onClick={handleOptionClick}>
            HIDE
          </button>
          <button className="option-button red" onClick={handleOptionClick}>
            KILL
          </button>
        </div>
        <div className="image-placeholder">
          <img
            src={untilImage}
            alt="What should Magnus do next decision screen"
            className="decision-image"
          />
        </div>
        <div className="right-options">
          <button className="option-button blue" onClick={handleOptionClick}>
            DO NOTHING
          </button>
          <button className="option-button green" onClick={handleOptionClick}>
            LEAVE
          </button>
        </div>
      </div>
      <div className="timer">
        <div className="clock"></div>
        Time left:{" "}
        <span id="timer">{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span> sec
      </div>
    </div>
  );
};

export default DecisionScreen;
