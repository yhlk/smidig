import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function requestFullScreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch((err) => {
            console.error("Fullscreen error: ", err.message);
        });
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen().catch((err) => {
            console.error("Fullscreen error: ", err.message);
        });
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        elem.webkitRequestFullscreen().catch((err) => {
            console.error("Fullscreen error: ", err.message);
        });
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen().catch((err) => {
            console.error("Fullscreen error: ", err.message);
        });
    } else {
        console.warn("Fullscreen API not supported");
    }
}

function lockOrientation() {
    if (window.screen.orientation && window.screen.orientation.lock) {
        window.screen.orientation.lock('landscape')
            .then(() => console.log("Orientation locked to landscape"))
            .catch((err) => console.error("Orientation lock error: ", err.message));
    } else if (window.screen.lockOrientation) {
        window.screen.lockOrientation('landscape')
            .catch((err) => console.error("Orientation lock error: ", err.message));
    } else {
        console.warn("Orientation lock API not supported");
    }
}

window.addEventListener('load', () => {
    console.log("Requesting fullscreen and locking orientation...");
    requestFullScreen();
    lockOrientation();
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
