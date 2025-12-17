// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import axios from "axios";
// import "./Auth.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/login", form);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       if (res.data.role === "teacher") {
//         navigate("/teacher-dashboard");
//       } else {
//         navigate("/user-dashboard");
//       }
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <Helmet>
//         <title>Login - Biswas English Academy</title>
//       </Helmet>

//       <button className="auth-close-btn" onClick={() => navigate("/")}>
//         ✖
//       </button>

//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>

//       <div className="auth-links">
//         <Link to="/signup">Don’t have an account? Sign Up</Link>
//         <Link to="/forgot-password">Forgot Password?</Link>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", form);

      // ✅ Save auth info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // ✅ Role-based redirect
      if (res.data.role === "teacher") {
        navigate("/teacher-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
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
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <div className="auth-links">
        <Link to="/signup">Don’t have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
