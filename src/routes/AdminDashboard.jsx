import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import CountUp from "react-countup";

import {
  FaUsers,
  FaUserShield,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaBan,
  FaEye,
  FaBullhorn,
  FaBook,
  FaTicketAlt,
  FaClipboardList,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    students: 0,
    teachers: 0,
    revenue: 0,
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
      .get(`${API_URL}/dashboard/admin-overview`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStats(res.data))
      .catch(() => console.error("Admin dashboard load failed"));
  }, []);

  return (
    <div className="admin-wrapper">
      {/* ================= SIDEBAR ================= */}
      <aside className="admin-sidebar">
        <h2 className="logo">Admin Panel</h2>

        <nav>
          <button className="nav active">
            <FaClipboardList /> Dashboard
          </button>
          <button className="nav">
            <FaUsers /> Users
          </button>
          <button className="nav">
            <FaMoneyBillWave /> Payments
          </button>
          <button className="nav">
            <FaBook /> Courses
          </button>
          <button className="nav">
            <FaBullhorn /> Announcements
          </button>
          <button className="nav">
            <FaTicketAlt /> Support
          </button>
          <button className="nav">
            <FaUserShield /> Audit Logs
          </button>
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Welcome, Admin 👑</h1>
            <p>{today}</p>
          </div>
        </header>

        {/* ================= OVERVIEW ================= */}
        <section className="admin-stats">
          <div className="stat-card">
            <FaUsers className="icon blue" />
            <h2>
              <CountUp end={stats.users} />
            </h2>
            <span>Total Users</span>
          </div>

          <div className="stat-card">
            <FaUserShield className="icon purple" />
            <h2>
              <CountUp end={stats.students} />
            </h2>
            <span>Students</span>
          </div>

          <div className="stat-card">
            <FaChalkboardTeacher className="icon green" />
            <h2>
              <CountUp end={stats.teachers} />
            </h2>
            <span>Teachers</span>
          </div>

          <div className="stat-card">
            <FaMoneyBillWave className="icon orange" />
            <h2>
              ₹<CountUp end={stats.revenue} />
            </h2>
            <span>Total Revenue</span>
          </div>
        </section>

        {/* ================= USER MANAGEMENT ================= */}
        <section className="admin-grid">
          <div className="card">
            <h3>👥 User Management</h3>

            <div className="action-list">
              <button className="action">
                <FaEye /> Login as User
              </button>
              <button className="action">
                <FaUserShield /> Promote Role
              </button>
              <button className="action danger">
                <FaBan /> Deactivate Account
              </button>
            </div>
          </div>

          {/* ================= FINANCE ================= */}
          <div className="card">
            <h3>💰 Finance & Subscriptions</h3>
            <ul className="list">
              <li>📊 Monthly Revenue Analytics</li>
              <li>🧾 Invoice Generation (PDF)</li>
              <li>🏷️ Coupon & Discount Manager</li>
            </ul>
          </div>
        </section>

        {/* ================= CONTENT & SUPPORT ================= */}
        <section className="admin-grid">
          <div className="card">
            <h3>📚 Content Oversight</h3>
            <ul className="list">
              <li>✅ Course Approval System</li>
              <li>📂 Global Resource Library</li>
              <li>⚙️ Site Configuration</li>
            </ul>
          </div>

          <div className="card">
            <h3>🛠 Support & Security</h3>
            <ul className="list">
              <li>📨 Support Tickets</li>
              <li>📢 Site-wide Announcements</li>
              <li>🕵️ Audit Logs</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
