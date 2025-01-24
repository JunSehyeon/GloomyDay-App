import React, { useState } from "react";
import "./style/login.style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginWithEmail = (event) => {
    event.preventDefault();
    // Implement login logic here
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="login-container">
      <div className="error-message" style={{ display: "none" }} id="error-message">
        <div className="alert alert-danger">Login failed. Please try again.</div>
      </div>
      <form className="login-form" onSubmit={handleLoginWithEmail}>
        <div className="form-group">
          <input
            type="email"
            placeholder="ID"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          LOG IN
        </button>

          <a href="/register" className="signup-link">
            SIGN IN
          </a>
        
      </form>
    </div>
  );
};

export default Login;