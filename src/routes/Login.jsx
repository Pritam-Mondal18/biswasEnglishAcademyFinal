import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* =========================
     NORMAL LOGIN
  ========================= */
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/login`, form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        navigate("/admin-dashboard");
      } else if (res.data.role === "teacher") {
        navigate("/teacher-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     GOOGLE LOGIN (UI HOOK)
     Backend will handle OAuth
  ========================= */
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="auth-container">
      <Helmet>
        <title>Login - Biswas English Academy</title>
      </Helmet>

      <button className="auth-close-btn" onClick={() => navigate("/")}>
        ✖
      </button>

      <h2>Login</h2>

      {/* ===== Login Form ===== */}
      <form onSubmit={handleLogin}>
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

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* ===== Divider ===== */}
      <div className="auth-divider">
        <span>OR</span>
      </div>

      {/* ===== Google Login ===== */}
      <button className="google-btn" onClick={handleGoogleLogin}>
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google"
        />
        Continue with Google
      </button>

      {/* ===== Signup Link ===== */}
      <div className="auth-links">
        <Link to="/signup">Don’t have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${API_URL}/login`, form);

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       if (res.data.role === "admin") navigate("/admin-dashboard");
//       else if (res.data.role === "teacher") navigate("/teacher-dashboard");
//       else navigate("/user-dashboard");
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input name="email" onChange={handleChange} required />
//       <input name="password" type="password" onChange={handleChange} required />
//       <button type="submit">Login</button>
//       <Link to="/signup">Create account</Link>
//     </form>
//   );
// };

// export default Login;
