import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import LoadingScreen from "./components/LoadingScreen";
import DecisionScreen from "./components/DecisionScreen";
import ThankYouScreen from "./components/ThankYouScreen";
import RatingScreen from "./components/RatingScreen";
import RatingScreen2 from "./components/RatingScreen2";
import RatingScreen3 from "./components/RatingScreen3";
import ThankYouFeedbackScreen from "./components/ThankYouFeedbackScreen";
import image from "./image.png"; // Import the image

function useFullScreenAndOrientation() {
  useEffect(() => {
    const enterFullScreen = () => {
      const docEl = document.documentElement;
      const requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;
      if (requestFullScreen) {
        requestFullScreen
          .call(docEl)
          .then(() => {
            console.log("Fullscreen mode enabled");
          })
          .catch((err) => {
            console.error(
              `Error attempting to enable full-screen mode: ${err.message}`
            );
          });
      } else {
        console.warn("Fullscreen API is not supported");
      }
    };

    const lockOrientation = () => {
      if (window.screen.orientation && window.screen.orientation.lock) {
        window.screen.orientation
          .lock("landscape")
          .then(() => {
            console.log("Orientation locked to landscape");
          })
          .catch((err) => {
            console.error(
              `Error attempting to lock orientation: ${err.message}`
            );
          });
      } else if (window.screen.lockOrientation) {
        try {
          window.screen.lockOrientation("landscape");
          console.log("Orientation locked to landscape");
        } catch (err) {
          console.error(`Orientation lock error: ${err.message}`);
        }
      } else {
        console.warn("Orientation lock not supported");
      }
    };

    const handleUserInteraction = () => {
      console.log(
        "User interaction detected, entering fullscreen and locking orientation..."
      );
      enterFullScreen();
      lockOrientation();
    };

    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);
}

function App() {
  const [screen, setScreen] = useState("login");
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [username, setUsername] = useState(""); // Add state for username

  useFullScreenAndOrientation(); // Use the custom hook to prompt full-screen

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogin = (data, userName) => {
    setUsername(userName); // Store the username in the state
    setScreen("loading");
  };

  const handleLoadingComplete = () => {
    setScreen("decision");
  };

  const handleDecisionComplete = () => {
    setScreen("thankyou");
  };

  const handleReview = () => {
    setScreen("rating");
  };

  const handleTheaterRating = () => {
    setScreen("rating2");
  };

  const handleThirdRating = () => {
    setScreen("rating3");
  };

  const handleFeedbackComplete = () => {
    setScreen("thankyoufeedback");
  };

  return (
    <>
      {isPortrait ? (
        <div className="orientation-message">
          Please rotate your device to landscape mode to continue.
        </div>
      ) : (
        <div
          className={`App main-content ${
            screen === "decision" ? "decision-screen-active" : ""
          }`}
        >
          <header
            className={`App-header ${
              screen === "decision" ? "decision" : "default"
            }`}
          >
            <img src={image} alt="Logo" className="App-logo" />
          </header>
          {screen === "login" && <Login onLogin={handleLogin} />}
          {screen === "loading" && (
            <LoadingScreen
              userName={username}
              onLoadingComplete={handleLoadingComplete}
            />
          )}
          {screen === "decision" && (
            <DecisionScreen
              userName={username}
              onDecisionComplete={handleDecisionComplete}
            />
          )}{" "}
          {/* Pass the username */}
          {screen === "thankyou" && 
            <ThankYouScreen 
              userName={username} 
              onReview={handleReview} />}
          {screen === "rating" && (
            <RatingScreen 
              userName={username}
              onComplete={handleTheaterRating} />
          )}
          {screen === "rating2" && (
            <RatingScreen2 
              userName={username}
              onComplete={handleThirdRating} />
          )}
          {screen === "rating3" && (
            <RatingScreen3 
              userName={username}
              onComplete={handleFeedbackComplete} />
          )}
          {screen === "thankyoufeedback" && 
            <ThankYouFeedbackScreen 
              userName={username}/>}
        </div>
      )}
    </>
  );
}

export default App;
