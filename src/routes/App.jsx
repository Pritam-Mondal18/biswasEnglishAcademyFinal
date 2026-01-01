// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// import Header from "../components/Header";

// // Public pages
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Gallery from "./Gallery";
// import Review from "./Review";
// import Contact from "./Contact";

// // Auth pages
// import Login from "./Login";
// import Signup from "./Signup";
// import ForgotPassword from "./ForgotPassword";
// import ResetPassword from "./ResetPassword";

// // Dashboards
// import UserDashboard from "./UserDashboard";
// import TeacherDashboard from "./TeacherDashboard";
// import AdminDashboard from "./AdminDashboard";

// // Protected Route
// import ProtectedRoute from "./ProtectedRoute";

// const App = () => {
//   const location = useLocation();
//   const state = location.state;

//   return (
//     <>
//       <Header />

//       <AnimatePresence mode="wait" initial={false}>
//         <Routes
//           location={state?.background || location}
//           key={state?.background?.pathname || location.pathname}
//         >
//           {/* ===== PUBLIC ROUTES ===== */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/review" element={<Review />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* ===== AUTH ROUTES ===== */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />

//           {/* ===== PROTECTED DASHBOARDS ===== */}
//           <Route
//             path="/user-dashboard"
//             element={
//               <ProtectedRoute role="student">
//                 <UserDashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/teacher-dashboard"
//             element={
//               <ProtectedRoute role="teacher">
//                 <TeacherDashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/admin-dashboard"
//             element={
//               <ProtectedRoute role="admin">
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </AnimatePresence>

//       {/* ===== MODAL AUTH ROUTES ===== */}
//       {state?.background && (
//         <AnimatePresence mode="wait" initial={false}>
//           <Routes>
//             <Route path="/login" element={<Login isModal />} />
//             <Route path="/signup" element={<Signup isModal />} />
//           </Routes>
//         </AnimatePresence>
//       )}
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Review from "./Review";
import Contact from "./Contact";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

import ProtectedRoute from "./ProtectedRoute";

import UserDashboard from "./UserDashboard";
import TeacherDashboard from "./TeacherDashboard";
import AdminDashboard from "./AdminDashboard";

const App = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={state?.background || location}>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* STUDENT */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute role="student">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* TEACHER */}
          <Route
            path="/teacher-dashboard"
            element={
              <ProtectedRoute role="teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />

          {/* ADMIN */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
