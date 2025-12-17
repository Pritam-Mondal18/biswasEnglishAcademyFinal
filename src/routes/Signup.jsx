// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import axios from "axios";
// import "./Auth.css";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/signup", form);
//       alert("Signup successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <Helmet>
//         <title>Sign Up - Biswas English Academy</title>
//       </Helmet>

//       <button className="auth-close-btn" onClick={() => navigate("/")}>
//         ✖
//       </button>

//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           onChange={handleChange}
//           required
//         />
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

//         <select name="role" onChange={handleChange}>
//           <option value="user">User</option>
//           <option value="teacher">Teacher</option>
//         </select>

//         <button type="submit">Sign Up</button>
//       </form>

//       <div className="auth-links">
//         <Link to="/login">Already have an account? Login</Link>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // ✅ default student
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", form);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
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
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
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

        <select name="role" onChange={handleChange}>
          <option value="user">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      <div className="auth-links">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
