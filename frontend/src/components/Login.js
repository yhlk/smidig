import React, { useState, useEffect } from "react";
import "./css/Login.css";

function Login({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [sessionCode, setSessionCode] = useState("");
  const [globalSessionCode, setGlobalSessionCode] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchGlobalSessionCode = async () => {
      try {
        const response = await fetch(`${apiUrl}/sessions/generate`);
        const data = await response.json();
        setGlobalSessionCode(data.enteringCode);
      } catch (error) {
        console.error("Error fetching global session code:", error);
      }
    };

    fetchGlobalSessionCode();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/sessions/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: userName,
          session_code: sessionCode,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">{/* Header content */}</header>
      <div className="login-content">
        <p>Enter Nickname and code to join the live experience</p>
        <small>Your code is displayed on the main screen</small>
        <div className="session-code">
          <p>
            <strong>Session Code: {globalSessionCode}</strong>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Choose a nickname"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter session code"
            value={sessionCode}
            onChange={(e) => setSessionCode(e.target.value)}
            required
          />
          <button type="submit">Enter</button>
        </form>
        <footer className="login-footer">
          <p>
            <small>Terms - contact@loading.no</small>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
