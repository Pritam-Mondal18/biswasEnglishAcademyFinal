// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const header = req.headers.authorization;

//   if (!header || !header.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "No token provided" });
//   }

//   const token = header.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     return res.status(401).json({ error: "Invalid token" });
//   }
// };

// const isUser = (req, res, next) => {
//   if (req.user.role !== "student") {
//     return res.status(403).json({ error: "Student only" });
//   }
//   next();
// };

// const isTeacher = (req, res, next) => {
//   if (req.user.role !== "teacher") {
//     return res.status(403).json({ error: "Teacher only" });
//   }
//   next();
// };

// const isAdmin = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ error: "Admin only" });
//   }
//   next();
// };

// module.exports = { auth, isUser, isTeacher, isAdmin };

const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "No token" });

  const decoded = jwt.verify(token, "SECRET_KEY");
  req.user = decoded;
  next();
};

exports.isTeacher = (req, res, next) => {
  if (req.user.role !== "teacher")
    return res.status(403).json({ message: "Teacher only" });
  next();
};

exports.isStudent = (req, res, next) => {
  if (req.user.role !== "student")
    return res.status(403).json({ message: "Student only" });
  next();
};
