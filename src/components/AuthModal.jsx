// src/components/AuthModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "./AuthModal.css";

const AuthModal = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Close modal → go back to previous page (or home if none)
  const handleClose = () => {
    if (location.state?.background) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <motion.div
      className="auth-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="auth-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{type === "login" ? "Login" : "Signup"}</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

        {type === "signup" && (
          <input type="password" placeholder="Confirm Password" />
        )}

        <div className="auth-buttons">
          <button className="btn">
            {type === "login" ? "Login" : "Signup"}
          </button>
        </div>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
