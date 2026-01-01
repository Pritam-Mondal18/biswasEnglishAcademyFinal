import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "./Auth.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // ✅ backend-compatible
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/auth/signup`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <Helmet>
        <title>Sign Up - Biswas English Academy</title>
      </Helmet>

      <button className="auth-close-btn" onClick={() => navigate("/")}>
        ✖
      </button>

      <h2>Sign Up</h2>

      {/* ✅ ONLY ONE SUBMIT HANDLER */}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {/* ✅ NO onSubmit on button */}
        <button type="submit">Sign Up</button>
      </form>

      <div className="auth-links">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
