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
    const [ratings, setRatings] = useState({ rating1: 0, rating2: 0 });

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

    const handleTheaterRating = (rating) => {
        setRatings((prev) => ({ ...prev, rating1: rating }));
        setScreen('rating2');
    };

    const handleThirdRating = (rating) => {
        setRatings((prev) => ({ ...prev, rating2: rating }));
        setScreen('rating3');
    };

    const handleFeedbackComplete = (rating3, feedback) => {
        const combinedRatings = { ...ratings, rating3 };
        postRatings({ ...combinedRatings, feedback });
        setScreen('thankyoufeedback');
    };

    const postRatings = async (ratingsData) => {
        try {
        const body = JSON.stringify([ratingsData]);
        await fetch('http://localhost:5000/api/rating', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: body,
        });
        } catch (error) {
        console.error("Error posting ratings:", error);
        }
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
            {screen === 'rating3' && <RatingScreen3 onComplete={handleFeedbackComplete} ratings={ratings} />}
            {screen === 'thankyoufeedback' && <ThankYouFeedbackScreen />}
            </div>
        )}
        </>
    );
}

export default App;