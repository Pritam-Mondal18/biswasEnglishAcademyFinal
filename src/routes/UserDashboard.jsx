import React from "react";

const UserDashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student Dashboard</h1>

      <section>
        <h3>🎓 My Courses</h3>
        <button>View Courses</button>
      </section>

      <section>
        <h3>💳 Buy Course</h3>
        <button>Buy Now</button>
      </section>

      <section>
        <h3>📊 Attendance</h3>
        <button>View Attendance</button>
      </section>
    </div>
  );
};

export default UserDashboard;
