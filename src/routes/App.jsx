// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// import Header from "../components/Header";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Gallery from "./Gallery";
// import Review from "./Review";
// import Contact from "./Contact";
// import Login from "./Login";
// import Signup from "./Signup";
// import ProtectedRoute from "./routes/ProtectedRoute";
// // import AuthModal from "../components/AuthModal";

// const App = () => {
//   const location = useLocation();

//   // If we navigated to /login or /signup from inside the app,
//   // keep background page visible and open modal on top.
//   const state = location.state;

//   return (
//     <>
//       <Header />

//       {/* AnimatePresence enables smooth page transitions */}
//       <AnimatePresence mode="wait" initial={false}>
//         <Routes
//           location={state?.background || location}
//           key={state?.background?.pathname || location.pathname}
//         >
//           {/* Main pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/review" element={<Review />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Full-page auth routes (SEO friendly) */}
//           <Route path="/login" element={<Login type="login" />} />
//           <Route path="/signup" element={<Signup type="signup" />} />
//         </Routes>
//       </AnimatePresence>

//       {/* Modal overlay routes (when coming from inside app) */}
//       {state?.background && (
//         <AnimatePresence mode="wait" initial={false}>
//           <Routes>
//             <Route path="/login" element={<Login type="login" isModal />} />
//             <Route path="/signup" element={<Signup type="signup" isModal />} />
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
import ProtectedRoute from "./ProtectedRoute"; // ✅ fixed import

// Dashboards
import TeacherDashboard from "./TeacherDashboard";
import UserDashboard from "./UserDashboard";

const App = () => {
  const location = useLocation();

  // If navigated to /login or /signup from inside the app, show modal
  const state = location.state;

  return (
    <>
      <Header />

      {/* AnimatePresence enables smooth page transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes
          location={state?.background || location}
          key={state?.background?.pathname || location.pathname}
        >
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/teacher-dashboard"
            element={
              <ProtectedRoute role="teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>

      {/* Modal overlay routes */}
      {state?.background && (
        <AnimatePresence mode="wait" initial={false}>
          <Routes>
            <Route path="/login" element={<Login isModal />} />
            <Route path="/signup" element={<Signup isModal />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
