import React from "react";

const TeacherDashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Teacher Dashboard</h1>

      <section>
        <h3>📘 Course Management</h3>
        <button>Add New Course</button>
      </section>

      <section>
        <h3>🖼 Upload Gallery Images</h3>
        <button>Upload Image</button>
      </section>

      <section>
        <h3>📝 Attendance</h3>
        <button>Mark Attendance</button>
      </section>
    </div>
  );
};

export default TeacherDashboard;
