import React from "react";
import "./UserDashboard.css";
// import { motion } from "framer-motion";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const UserDashboard = () => {
  const hoursData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Hours Spent",
        data: [2, 4, 3, 8, 5, 6, 4],
        backgroundColor: "#e91e63",
        borderRadius: 8,
      },
    ],
  };

  const hoursOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: { stepSize: 2 },
        grid: { color: "#eee" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="dashboard-wrapper">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">Dashboard</h2>
        <input className="search" placeholder="Search..." />

        <nav>
          <button className="nav active">Dashboard</button>
          <button className="nav">My Courses</button>
          <button className="nav">Analytics</button>
          <button className="nav">Community</button>
          <button className="nav">Settings</button>
        </nav>

        <div className="mobile-app">
          <p>Download our Mobile app</p>
          <button>→</button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <div className="header">
          <div>
            <h1>Welcome Back 👋</h1>
            <p>Sun Dec 28 2025</p>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat-card large">
            <div className="stat-header">
              <h3>Time Spendings</h3>
              <select>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <h2 className="hours-total">
              10h <span>20m</span>
            </h2>

            <Bar data={hoursData} options={hoursOptions} />
          </div>

          <div className="stat-card">
            <span>🎓</span>
            <h2>22</h2>
            <p>Total Courses</p>
          </div>

          <div className="stat-card">
            <span>✅</span>
            <h2>20</h2>
            <p>Completed</p>
          </div>
        </div>

        {/* CONTENT */}
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

          <div className="card">
            <h3>Course Statistics</h3>

            <div className="donut">
              <div className="circle">22</div>
              <ul>
                <li>
                  <span className="red" /> Incomplete 40%
                </li>
                <li>
                  <span className="blue" /> Completed 30%
                </li>
                <li>
                  <span className="cyan" /> In Progress 20%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* PROFILE */}
      <aside className="profile">
        <img src="https://i.pravatar.cc/150" alt="profile" />
        <h3>Royal Parvej</h3>
        <p>Student</p>

        <div className="profile-stats">
          <div>
            <h4>10</h4>
            <span>Rank</span>
          </div>
          <div>
            <h4>2h</h4>
            <span>Avg</span>
          </div>
          <div>
            <h4>12</h4>
            <span>Courses</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default UserDashboard;
