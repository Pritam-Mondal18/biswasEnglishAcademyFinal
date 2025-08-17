import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    alert("Google Sign-In coming soon!");
  };

  return (
    <div className="auth-container">
      <Helmet>
        <title>Login - Biswas English Academy</title>
        <meta
          name="description"
          content="Login to Biswas English Academy to access courses and services."
        />
      </Helmet>

      {/* Close button → always goes Home */}
      <button className="auth-close-btn" onClick={() => navigate("/")}>
        ✖
      </button>

      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <button className="google-btn" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>

      <div className="auth-links">
        <Link to="/signup">Don’t have an account? Sign Up</Link>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
