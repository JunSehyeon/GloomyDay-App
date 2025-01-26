import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./style/login.style.css";
import { clearErrors, loginWithEmail } from "../../features/user/userSlice";
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loginError } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loginError) {
      dispatch(clearErrors());
    }
  }, [dispatch, loginError]);

  const handleLoginWithEmail = (event) => {
    event.preventDefault();
    dispatch(loginWithEmail({ email, password }));
  };

  const handleGoogleLogin = async (googleData) => {
    // Handle Google login success logic here
    console.log("Google login successful:", googleData);
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="login-container">
      {loginError && (
        <div className="error-message">
          <div className="alert alert-danger">Login failed. Please try again.</div>
        </div>
      )}

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
      <div className="text-align-center mt-2">
        <p>- Sign in with Google -</p>
        <div className="display-center">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log("Google Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
