import React, { useEffect, useState } from "react";
import "./TeacherDashboard.css";
import axios from "axios";
import CountUp from "react-countup";
import {
  FaUsers,
  FaClipboardList,
  FaBullhorn,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const TeacherDashboard = () => {
  /* ======================
     OVERVIEW STATS
  ====================== */
  const [overview, setOverview] = useState({
    students: 0,
    classes: 0,
    assignments: 0,
    completed: 0,
  });

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL}/dashboard/teacher-overview`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOverview(res.data))
      .catch(() => console.error("Failed to load teacher dashboard"));
  }, []);

  /* ======================
     STUDENT PERFORMANCE
  ====================== */
  const performanceData = {
    labels: ["Excellent", "Good", "Average"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b"],
        borderWidth: 0,
      },
    ],
  };

  const performanceOptions = {
    responsive: true,
    cutout: "72%", // ✅ correct place
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="teacher-wrapper">
      {/* ================= SIDEBAR ================= */}
      <aside className="teacher-sidebar">
        <h2 className="logo">Teacher Panel</h2>
        <nav>
          <button className="nav active">Dashboard</button>
          <button className="nav">Classrooms</button>
          <button className="nav">Assignments</button>
          <button className="nav">Attendance</button>
          <button className="nav">Analytics</button>
          <button className="nav">Messages</button>
          <button className="nav">Settings</button>
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="teacher-main">
        <header className="teacher-header">
          <div>
            <h1>Welcome Back, Teacher 👋</h1>
            <p>{today}</p>
          </div>
        </header>

        {/* ================= OVERVIEW ================= */}
        <section className="overview-grid">
          <div className="overview-card">
            <FaUsers className="icon blue" />
            <h2>
              <CountUp end={overview.students} />
            </h2>
            <span>Students</span>
          </div>

          <div className="overview-card">
            <FaBookOpen className="icon purple" />
            <h2>
              <CountUp end={overview.classes} />
            </h2>
            <span>Classes</span>
          </div>

          <div className="overview-card">
            <FaClipboardList className="icon orange" />
            <h2>
              <CountUp end={overview.assignments} />
            </h2>
            <span>Assignments</span>
          </div>

          <div className="overview-card">
            <FaCheckCircle className="icon green" />
            <h2>
              <CountUp end={overview.completed} />
            </h2>
            <span>Completed</span>
          </div>
        </section>

        {/* ================= ANALYTICS ================= */}
        <section className="teacher-grid">
          {/* STUDENT PERFORMANCE */}
          <div className="card performance-card">
            <h3>📊 Student Performance</h3>

            <div className="performance-wrapper">
              <div className="donut-wrapper">
                <Doughnut data={performanceData} options={performanceOptions} />

                {/* CENTER TEXT */}
                <div className="donut-center">
                  <h2>75%</h2>
                  <span>Overall</span>
                </div>
              </div>

              {/* LEGEND */}
              <ul className="performance-legend">
                <li>
                  <span className="dot green" /> Excellent <b>45%</b>
                </li>
                <li>
                  <span className="dot blue" /> Good <b>30%</b>
                </li>
                <li>
                  <span className="dot yellow" /> Average <b>25%</b>
                </li>
              </ul>
            </div>
          </div>

          {/* ANNOUNCEMENTS */}
          <div className="card">
            <h3>
              <FaBullhorn /> Announcements
            </h3>
            <ul className="announcements">
              <li>📢 Assignment 3 deadline extended</li>
              <li>📢 Parent-teacher meeting on Friday</li>
              <li>📢 New grammar resources uploaded</li>
            </ul>
          </div>
        </section>

        {/* ================= FEEDBACK ================= */}
        <section className="card">
          <h3>📝 Feedback Center</h3>
          <textarea
            placeholder="Leave feedback for students (essay, voice, or notes)..."
            rows={4}
          />
          <button className="primary-btn">Submit Feedback</button>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;
