// // import React from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ children, role }) => {
// //   const token = localStorage.getItem("token");
// //   const userRole = localStorage.getItem("role");

// //   if (!token) return <Navigate to="/login" />;
// //   if (role && userRole !== role) return <Navigate to="/" />;

// //   return children;
// // };

// // export default ProtectedRoute;

// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, role }) => {
//   const token = localStorage.getItem("token");
//   const userRole = localStorage.getItem("role");

//   if (!token) return <Navigate to="/login" replace />;
//   if (role && userRole !== role) return <Navigate to="/" replace />;

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
