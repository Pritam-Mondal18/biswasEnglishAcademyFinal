// import { useEffect, useState } from "react";
// import "./TeacherDashboard.css";

// const TeacherDashboard = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [courses, setCourses] = useState([]);
//   const [message, setMessage] = useState("");
//   const [editCourse, setEditCourse] = useState(null);

//   const token = localStorage.getItem("token");

//   const fetchCourses = async () => {
//     const res = await fetch("http://localhost:5000/courses");
//     const data = await res.json();
//     setCourses(data);
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // ADD
//   const addCourse = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/courses/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//       body: JSON.stringify({ title, description, price }),
//     });

//     if (res.ok) {
//       setMessage("✅ Course added");
//       setTitle("");
//       setDescription("");
//       setPrice("");
//       fetchCourses();
//     } else {
//       setMessage("❌ Failed to add course");
//     }
//   };

//   // DELETE
//   const deleteCourse = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this course?")) return;

//     await fetch(`http://localhost:5000/courses/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: token,
//       },
//     });

//     fetchCourses();
//   };

//   // UPDATE
//   const updateCourse = async () => {
//     await fetch(`http://localhost:5000/courses/${editCourse._id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//       body: JSON.stringify(editCourse),
//     });

//     setEditCourse(null);
//     fetchCourses();
//   };

//   return (
//     <div className="teacher-layout">
//       {/* LEFT */}
//       <div className="teacher-left">
//         <div className="teacher-card">
//           <h2>Add New Course</h2>
//           <p className="subtitle">Create a course for students</p>

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

//             <button>Add Course</button>
//           </form>

//           {message && <p className="message">{message}</p>}
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="teacher-right">
//         <h2 className="section-title">Your Courses</h2>

//         <div className="course-grid">
//           {courses.map((course) => (
//             <div key={course._id} className="course-card">
//               <div>
//                 <h3>{course.title}</h3>
//                 <p>{course.description}</p>
//               </div>

//               <div className="course-footer">
//                 <span className="price">₹ {course.price}</span>

//                 <div className="course-actions">
//                   <button onClick={() => setEditCourse(course)}>✏️</button>
//                   <button onClick={() => deleteCourse(course._id)}>🗑️</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* EDIT MODAL */}
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

//             <div className="modal-actions">
//               <button onClick={updateCourse}>Save</button>
//               <button onClick={() => setEditCourse(null)}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeacherDashboard;

import { useEffect, useState } from "react";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const [editCourse, setEditCourse] = useState(null);

  const token = localStorage.getItem("token");

  /* =========================
     FETCH COURSES
  ========================= */
  const fetchCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/courses");
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  /* =========================
     ADD COURSE
  ========================= */
  const addCourse = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/courses/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, price }),
    });

    if (!res.ok) {
      setMessage("❌ Failed to add course");
      return;
    }

    setMessage("✅ Course added successfully");
    setTitle("");
    setDescription("");
    setPrice("");
    fetchCourses();
  };

  /* =========================
     DELETE COURSE
  ========================= */
  const deleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    const res = await fetch(`http://localhost:5000/courses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      alert("❌ Delete failed");
      return;
    }

    fetchCourses();
  };

  /* =========================
     UPDATE COURSE
  ========================= */
  const updateCourse = async () => {
    const res = await fetch(`http://localhost:5000/courses/${editCourse._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: editCourse.title,
        description: editCourse.description,
        price: editCourse.price,
      }),
    });

    if (!res.ok) {
      alert("❌ Update failed");
      return;
    }

    setEditCourse(null);
    fetchCourses();
  };

  return (
    <div className="teacher-layout">
      {/* ================= LEFT ================= */}
      <div className="teacher-left">
        <div className="teacher-card">
          <h2>Add New Course</h2>
          <p className="subtitle">Create a course for students</p>

          <form onSubmit={addCourse}>
            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Price (₹)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <button type="submit">Add Course</button>
          </form>

          {message && <p className="message">{message}</p>}
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="teacher-right">
        <h2 className="section-title">Your Courses</h2>

        <div className="course-grid">
          {courses.length === 0 && (
            <p className="empty">No courses added yet</p>
          )}

          {courses.map((course) => (
            <div key={course._id} className="course-card">
              <div>
                <h3 title={course.title}>{course.title}</h3>
                <p>{course.description}</p>
              </div>

              <div className="course-footer">
                <span className="price">₹ {course.price}</span>

                <div className="course-actions">
                  <button onClick={() => setEditCourse(course)}>✏️</button>
                  <button onClick={() => deleteCourse(course._id)}>🗑️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {editCourse && (
        <div className="modal">
          <div className="modal-box">
            <h3>Edit Course</h3>

            <input
              type="text"
              value={editCourse.title}
              onChange={(e) =>
                setEditCourse({ ...editCourse, title: e.target.value })
              }
            />

            <textarea
              value={editCourse.description}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  description: e.target.value,
                })
              }
            />

            <input
              type="number"
              value={editCourse.price}
              onChange={(e) =>
                setEditCourse({ ...editCourse, price: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={updateCourse}>Save</button>
              <button onClick={() => setEditCourse(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
