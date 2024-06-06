import React, { useState } from 'react';
import './css/Login.css';

function Login({ onLogin, code }) {
  const [nickname, setNickname] = useState('');
  const [inputCode, setInputCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(nickname, inputCode);
  };

  const handleNicknameChange = (e) => {
    const { value } = e.target;
    const alphanumericOnly = value.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters
    if (alphanumericOnly.length <= 8) {
      setNickname(alphanumericOnly);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
      </header>
      <div className="login-content">
        <p>Enter Nickname and code to join the live experience</p>
        <small>Your code is displayed on the main screen: {code}</small>
        <form onSubmit={handleSubmit}>
          <input
            id="nickname"
            type="text"
            placeholder="Choose a nickname"
            value={nickname}
            onChange={handleNicknameChange}
            required
          />
          <input
            type="text"
            placeholder="12345"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            required
          />
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
