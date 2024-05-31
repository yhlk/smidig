import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import LoadingScreen from './components/LoadingScreen';
import DecisionScreen from './components/DecisionScreen';
import ThankYouScreen from './components/ThankYouScreen';
import RatingScreen from './components/RatingScreen';
import RatingScreen2 from './components/RatingScreen2';
import RatingScreen3 from './components/RatingScreen3';
import ThankYouFeedbackScreen from './components/ThankYouFeedbackScreen';

function App() {
  const [screen, setScreen] = useState('login');

  const handleLogin = () => {
    setScreen('loading');
  };

  const handleLoadingComplete = () => {
    setScreen('decision');
  };

  const handleDecisionComplete = () => {
    setScreen('thankyou');
  };

  const handleReview = () => {
    setScreen('rating');
  };

  const handleTheaterRating = () => {
    setScreen('rating2');
  };

  const handleThirdRating = () => {
    setScreen('rating3');
  };

  const handleFeedbackComplete = () => {
    setScreen('thankyoufeedback');
  };

  return (
    <div className="App">
      {screen === 'login' && <Login onLogin={handleLogin} />}
      {screen === 'loading' && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {screen === 'decision' && <DecisionScreen onDecisionComplete={handleDecisionComplete} />}
      {screen === 'thankyou' && <ThankYouScreen onReview={handleReview} />}
      {screen === 'rating' && <RatingScreen onComplete={handleTheaterRating} />}
      {screen === 'rating2' && <RatingScreen2 onComplete={handleThirdRating} />}
      {screen === 'rating3' && <RatingScreen3 onComplete={handleFeedbackComplete} />}
      {screen === 'thankyoufeedback' && <ThankYouFeedbackScreen />}
    </div>
  );
}

export default App;
