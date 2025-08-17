import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import { Helmet } from "react-helmet-async";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleGoogleSignup = () => {
    alert("Google Sign-Up coming soon!");
  };

  return (
    <div className="auth-container">
      <Helmet>
        <title>Sign Up - Biswas English Academy</title>
        <meta
          name="description"
          content="Create an account at Biswas English Academy to access learning resources."
        />
      </Helmet>

      {/* Close button → always goes Home */}
      <button className="auth-close-btn" onClick={() => navigate("/")}>
        ✖
      </button>

      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
      </form>

      <button className="google-btn" onClick={handleGoogleSignup}>
        Sign up with Google
      </button>

      <div className="auth-links">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
