import React, { useState } from "react";
import "./index.css";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      alert(`Welcome, ${username}!`);
    } else {
      alert("Please enter a username.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to autoX</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
