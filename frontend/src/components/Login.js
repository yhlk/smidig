import React from 'react';
import './css/Login.css';

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <h1 className="title">LOADING</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="input" />
        <input type="text" placeholder="Room Code" className="input" />
        <button type="submit" className="submit-button">Enter</button>
      </form>
    </div>
  );
}

export default Login;
