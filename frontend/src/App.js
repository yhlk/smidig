import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import LoadingScreen from './components/LoadingScreen';
import DecisionScreen from './components/DecisionScreen';
import ThankYouScreen from './components/ThankYouScreen';
import RatingScreen from './components/RatingScreen';
import RatingScreen2 from './components/RatingScreen2';
import RatingScreen3 from './components/RatingScreen3';
import ThankYouFeedbackScreen from './components/ThankYouFeedbackScreen';
import image from './image.png'; // Import the image

function useFullScreen() {
  useEffect(() => {
    const enterFullScreen = () => {
      const docEl = document.documentElement;
      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

      if (requestFullScreen) {
        requestFullScreen.call(docEl).catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      }
    };

    const lockOrientation = () => {
      if (window.screen.orientation && window.screen.orientation.lock) {
        window.screen.orientation.lock('landscape').catch((err) => {
          console.error(`Error attempting to lock orientation: ${err.message}`);
        });
      } else {
        console.warn('Orientation lock not supported');
      }
    };

    console.log("Adding event listeners for fullscreen and orientation lock...");
    document.addEventListener('click', enterFullScreen, { once: true });
    lockOrientation();

    return () => {
      document.removeEventListener('click', enterFullScreen);
    };
  }, []);
}

function App() {
  const [screen, setScreen] = useState('login');
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useFullScreen(); // Use the custom hook to prompt full-screen

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <>
      {isPortrait ? (
        <div className="orientation-message">
          Please rotate your device to landscape mode to continue.
        </div>
      ) : (
        <div className="App main-content">
          <header className="App-header">
            <img src={image} alt="Logo" className="App-logo" />
          </header>
          {screen === 'login' && <Login onLogin={handleLogin} />}
          {screen === 'loading' && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
          {screen === 'decision' && <DecisionScreen onDecisionComplete={handleDecisionComplete} />}
          {screen === 'thankyou' && <ThankYouScreen onReview={handleReview} />}
          {screen === 'rating' && <RatingScreen onComplete={handleTheaterRating} />}
          {screen === 'rating2' && <RatingScreen2 onComplete={handleThirdRating} />}
          {screen === 'rating3' && <RatingScreen3 onComplete={handleFeedbackComplete} />}
          {screen === 'thankyoufeedback' && <ThankYouFeedbackScreen />}
        </div>
      )}
    </>
  );
}

export default App;
