
import React from 'react';
import './css/Login.css';


function Login({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <header className="login-header"> 
        
      </header>
      <div className="login-content">
        <p>Enter Nickname and code to join the live experience</p>
        <small>Your code is displayed on the main screen</small>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Choose a nickname" required />
          <input type="number" placeholder="1234 5678" required />
          <button type="submit">Enter</button>
        </form>
        <footer className="login-footer">
          <p><small>Terms - contact@loading.no</small></p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
