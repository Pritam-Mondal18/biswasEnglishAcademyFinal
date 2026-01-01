// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, role }) => {
//   const token = localStorage.getItem("token");
//   const userRole = localStorage.getItem("role");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   if (role && userRole !== role) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

/**
 * @param {ReactNode} children - Protected component
 * @param {string | string[]} role - Allowed role(s)
 */
const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  /* =====================
     AUTH CHECK
  ===================== */
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  /* =====================
     ROLE CHECK
  ===================== */
  if (role) {
    // Allow single role OR multiple roles
    const allowedRoles = Array.isArray(role) ? role : [role];

    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
