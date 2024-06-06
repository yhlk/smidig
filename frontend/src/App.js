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

function useFullScreenAndOrientation() {
  useEffect(() => {
    const enterFullScreen = () => {
      const docEl = document.documentElement;
      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      if (requestFullScreen) {
        requestFullScreen.call(docEl).catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      } else {
        console.warn('Fullscreen API is not supported');
      }
    };

    const lockOrientation = () => {
      if (window.screen.orientation && window.screen.orientation.lock) {
        window.screen.orientation.lock('landscape').catch((err) => {
          console.error(`Error attempting to lock orientation: ${err.message}`);
        });
      } else if (window.screen.lockOrientation) {
        try {
          window.screen.lockOrientation('landscape');
        } catch (err) {
          console.error(`Orientation lock error: ${err.message}`);
        }
      } else {
        console.warn('Orientation lock not supported');
      }
    };

    const handleUserInteraction = () => {
      enterFullScreen();
      lockOrientation();
    };

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);
}

function App() {
  const [screen, setScreen] = useState('login');
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [nickname, setNickname] = useState(''); // State for nickname
  const [code, setCode] = useState(''); // State for code

  useFullScreenAndOrientation(); // Use the custom hook to prompt full-screen

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  useEffect(() => {
    const fetchCode = () => {
      const existingCode = localStorage.getItem('sessionCode');
      if (existingCode) {
        setCode(existingCode);
      } else {
        generateNewCode();
      }
    };

    fetchCode();
  }, []);

  const generateNewCode = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 5-digit random code
    localStorage.setItem('sessionCode', randomCode);
    setCode(randomCode);
    console.log("Generated Code: ", randomCode); // For debugging purposes
  };

  const handleLogin = (nickname, inputCode) => {
    if (inputCode === code) {
      setNickname(nickname); // Set nickname
      setScreen('loading');
    } else {
      alert('Invalid code. Please try again.');
    }
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
        <div className={`App main-content ${screen === 'decision' ? 'decision-screen-active' : ''}`}>
          <header className={`App-header ${screen === 'decision' ? 'decision' : 'default'}`}>
            <img src={image} alt="Logo" className="App-logo" />
          </header>
          {screen === 'login' && <Login onLogin={handleLogin} code={code} />}
          {screen === 'loading' && <LoadingScreen onLoadingComplete={handleLoadingComplete} nickname={nickname} />}
          {screen === 'decision' && <DecisionScreen onDecisionComplete={handleDecisionComplete} nickname={nickname} />}
          {screen === 'thankyou' && <ThankYouScreen onReview={handleReview} nickname={nickname} />}
          {screen === 'rating' && <RatingScreen onComplete={handleTheaterRating} nickname={nickname} />}
          {screen === 'rating2' && <RatingScreen2 onComplete={handleThirdRating} nickname={nickname} />}
          {screen === 'rating3' && <RatingScreen3 onComplete={handleFeedbackComplete} nickname={nickname} />}
          {screen === 'thankyoufeedback' && <ThankYouFeedbackScreen nickname={nickname} />}
        </div>
      )}
    </>
  );
}

export default App;
