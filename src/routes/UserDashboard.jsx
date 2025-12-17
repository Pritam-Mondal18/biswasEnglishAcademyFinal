import { useEffect, useState } from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="student-page">
      <h2>Available Courses</h2>

      <div className="student-course-grid">
        {courses.map((course) => (
          <div key={course._id} className="student-course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span>₹ {course.price}</span>
            <button>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
