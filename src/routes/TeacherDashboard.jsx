// import { useEffect, useState } from "react";
// import "./TeacherDashboard.css";

// const API_URL = "http://localhost:5000"; // later move to env

// const TeacherDashboard = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [courses, setCourses] = useState([]);
//   const [message, setMessage] = useState("");
//   const [editCourse, setEditCourse] = useState(null);

//   const token = localStorage.getItem("token");

//   /* =========================
//      FETCH COURSES (FIXED)
//   ========================= */
//   const fetchCourses = async () => {
//     try {
//       const res = await fetch(`${API_URL}/courses`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error("Unauthorized");
//       }

//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       console.error(err.message);
//       setMessage("❌ Failed to load courses");
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   /* =========================
//      ADD COURSE
//   ========================= */
//   const addCourse = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`${API_URL}/courses/add`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ title, description, price }),
//       });

//       if (!res.ok) {
//         throw new Error("Unauthorized");
//       }

//       setMessage("✅ Course added successfully");
//       setTitle("");
//       setDescription("");
//       setPrice("");
//       fetchCourses();
//     } catch {
//       setMessage("❌ Failed to add course");
//     }
//   };

//   /* =========================
//      DELETE COURSE
//   ========================= */
//   const deleteCourse = async (id) => {
//     if (!window.confirm("Are you sure?")) return;

//     try {
//       const res = await fetch(`${API_URL}/courses/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error("Unauthorized");
//       }

//       fetchCourses();
//     } catch {
//       alert("❌ Delete failed");
//     }
//   };

//   /* =========================
//      UPDATE COURSE
//   ========================= */
//   const updateCourse = async () => {
//     try {
//       const res = await fetch(`${API_URL}/courses/${editCourse._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           title: editCourse.title,
//           description: editCourse.description,
//           price: editCourse.price,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Unauthorized");
//       }

//       setEditCourse(null);
//       fetchCourses();
//     } catch {
//       alert("❌ Update failed");
//     }
//   };

//   return (
//     <div className="teacher-layout">
//       <div className="teacher-left">
//         <div className="teacher-card">
//           <h2>Add New Course</h2>

//           <form onSubmit={addCourse}>
//             <input
//               type="text"
//               placeholder="Course Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />

//             <textarea
//               placeholder="Course Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />

//             <input
//               type="number"
//               placeholder="Price (₹)"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//             />

//             <button type="submit">Add Course</button>
//           </form>

//           {message && <p className="message">{message}</p>}
//         </div>
//       </div>

//       <div className="teacher-right">
//         <h2>Your Courses</h2>

//         <div className="course-grid">
//           {courses.map((course) => (
//             <div key={course._id} className="course-card">
//               <h3>{course.title}</h3>
//               <p>{course.description}</p>
//               <span>₹ {course.price}</span>

//               <div className="course-actions">
//                 <button onClick={() => setEditCourse(course)}>✏️</button>
//                 <button onClick={() => deleteCourse(course._id)}>🗑️</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {editCourse && (
//         <div className="modal">
//           <div className="modal-box">
//             <h3>Edit Course</h3>

//             <input
//               value={editCourse.title}
//               onChange={(e) =>
//                 setEditCourse({ ...editCourse, title: e.target.value })
//               }
//             />

//             <textarea
//               value={editCourse.description}
//               onChange={(e) =>
//                 setEditCourse({ ...editCourse, description: e.target.value })
//               }
//             />

//             <input
//               type="number"
//               value={editCourse.price}
//               onChange={(e) =>
//                 setEditCourse({ ...editCourse, price: e.target.value })
//               }
//             />

//             <button onClick={updateCourse}>Save</button>
//             <button onClick={() => setEditCourse(null)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;

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
