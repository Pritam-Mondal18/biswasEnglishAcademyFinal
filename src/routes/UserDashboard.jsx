import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
import CountUp from "react-countup";
import {
  FaGraduationCap,
  FaChartLine,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const UserDashboard = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Royal Parvej");
  const [phone, setPhone] = useState("+91 74398 85351");
  const [address, setAddress] = useState(
    "16, Bagpara 2nd Lane,\nMorepukure, Rishra,\nHooghly – 712250"
  );
  const [profileImage, setProfileImage] = useState(null);

  // ROLE (from login)
  const role = localStorage.getItem("role") || "Student";

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  /* ======================
     LIVE DATE
  ====================== */
  const todayFormatted = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  /* ======================
     VIEW STATE (FIX 🔥)
  ====================== */
  const [view, setView] = useState("weekly");

  /* ======================
     DASHBOARD STATS (API)
  ====================== */
  const [stats, setStats] = useState({
    purchased: 0,
    attendance: 0,
    finished: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${API_URL}/dashboard/user-stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(res.data);
      } catch (err) {
        console.error("Failed to load dashboard stats");
      }
    };

    fetchStats();
  }, []);

  /* ======================
     CHART DATA
  ====================== */
  const weeklyData = [2, 4, 3, 8, 5, 6, 4];
  const monthlyData = [22, 26, 19, 30];

  const hoursData = {
    labels:
      view === "weekly"
        ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        : ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        data: view === "weekly" ? weeklyData : monthlyData,
        backgroundColor: "#ec4899",
        hoverBackgroundColor: "#db2777",
        borderRadius: 10,
      },
    ],
  };

  const hoursOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { ticks: { stepSize: 2 }, grid: { color: "#eee" } },
      x: { grid: { display: false } },
    },
  };

  /* ======================
     LIVE CALENDAR LOGIC
  ====================== */
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  return (
    <div className="dashboard-wrapper">
      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">
        <h2 className="logo">Dashboard</h2>
        <input className="search" placeholder="Search..." />

        <nav>
          <button className="nav active">Dashboard</button>
          <button className="nav">My Courses</button>
          <button className="nav">Analytics</button>
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="main">
        <div className="header">
          <h1>
            Welcome Back <span>👋</span>
          </h1>
          <p>{todayFormatted}</p>
        </div>

        {/* ================= STATS ================= */}
        <div className="stats">
          {/* HOURS CARD */}
          <div className="stat-card large">
            <div className="stat-header">
              <h3>Time Spendings</h3>
              <select value={view} onChange={(e) => setView(e.target.value)}>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <h2 className="hours-total">
              {view === "weekly" ? "10h" : "40h"} <span>20m</span>
            </h2>

            <Bar data={hoursData} options={hoursOptions} />
          </div>

          {/* COURSE OVERVIEW CARD */}
          <div className="stat-card">
            <h3>🎓 Course Overview</h3>

            <div className="course-metrics vertical">
              {/* Purchased */}
              <div className="metric">
                <div className="icon pink">
                  <FaGraduationCap />
                </div>
                <div>
                  <h2>
                    <CountUp end={stats.purchased} duration={1.5} />
                  </h2>
                  <span>Purchased Courses</span>
                </div>
              </div>

              {/* Attendance */}
              <div className="metric">
                <div className="icon blue">
                  <FaChartLine />
                </div>
                <div>
                  <h2>
                    <CountUp end={stats.attendance} duration={1.5} />%
                  </h2>
                  <span>Attendance</span>
                </div>
              </div>

              {/* Finished */}
              <div className="metric">
                <div className="icon green">
                  <FaCheckCircle />
                </div>
                <div>
                  <h2>
                    <CountUp end={stats.finished} duration={1.5} />
                  </h2>
                  <span>Finished Courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="content-grid">
          <div className="card">
            <h3>Homework Progress</h3>

            <div className="progress-item">
              <span>User Experience Design</span>
              <div className="bar">
                <div style={{ width: "92%" }} />
              </div>
            </div>

            <div className="progress-item">
              <span>User Interface Design</span>
              <div className="bar">
                <div style={{ width: "52%" }} />
              </div>
            </div>
          </div>

          <div className="card course-statistics">
            <h3>Course Statistics</h3>

            <div className="stats-body">
              {/* DONUT */}
              <div
                className="donut"
                style={{
                  background: `conic-gradient(
          #ec4899 0% 40%,
          #3b82f6 40% 70%,
          #22d3ee 70% 100%
        )`,
                }}
              >
                <div className="donut-center">22</div>
              </div>

              {/* LEGEND */}
              <ul className="stats-legend">
                <li>
                  <span className="dot pink"></span>
                  Incomplete 40%
                </li>
                <li>
                  <span className="dot blue"></span>
                  Completed 30%
                </li>
                <li>
                  <span className="dot cyan"></span>
                  In Progress 20%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* ================= PROFILE ================= */}
      <aside className="profile">
        {/* IMAGE */}
        <div className="profile-img-wrapper">
          <img
            src={profileImage || "https://i.pravatar.cc/150"}
            alt="profile"
            className="profile-img"
          />

          <label className="upload-btn">
            Change
            <input type="file" hidden onChange={handleImageUpload} />
          </label>
        </div>

        {/* NAME */}
        {editMode ? (
          <input
            className="profile-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <h3>{name}</h3>
        )}

        <p className="role">{role}</p>

        {/* CONTACT INFO */}
        <div className="profile-contact">
          {/* PHONE */}
          <div className="contact-item">
            <span>📞</span>
            {editMode ? (
              <input
                className="profile-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <a href={`tel:${phone}`}>{phone}</a>
            )}
          </div>

          {/* ADDRESS */}
          <div className="contact-item">
            <span>📍</span>
            {editMode ? (
              <textarea
                className="profile-textarea"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            ) : (
              <span className="address-text">{address}</span>
            )}
          </div>
        </div>

        {/* ACTION BUTTON */}
        <button
          className="profile-action-btn"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Save Profile" : "Edit Profile"}
        </button>

        {/* ROLE-BASED STATS */}
        <div className="profile-stats">
          {role === "Student" && (
            <>
              <div>
                <h4>10</h4>
                <span>Rank</span>
              </div>
              <div>
                <h4>85%</h4>
                <span>Attendance</span>
              </div>
              <div>
                <h4>12</h4>
                <span>Courses</span>
              </div>
            </>
          )}

          {role === "Teacher" && (
            <>
              <div>
                <h4>6</h4>
                <span>Courses</span>
              </div>
              <div>
                <h4>120</h4>
                <span>Students</span>
              </div>
              <div>
                <h4>4.8⭐</h4>
                <span>Rating</span>
              </div>
            </>
          )}

          {role === "Admin" && (
            <>
              <div>
                <h4>25</h4>
                <span>Teachers</span>
              </div>
              <div>
                <h4>420</h4>
                <span>Students</span>
              </div>
              <div>
                <h4>32</h4>
                <span>Courses</span>
              </div>
            </>
          )}
        </div>
        {/* 🔥 LIVE CALENDAR */}
        <div className="calendar">
          <h4>
            {today.toLocaleString("default", { month: "long" })} {year}
          </h4>

          <div className="calendar-grid">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <span key={d} className="day-label">
                {d}
              </span>
            ))}

            {calendarDays.map((day, i) => (
              <span
                key={i}
                className={`day ${day === today.getDate() ? "today" : ""}`}
              >
                {day || ""}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default UserDashboard;
