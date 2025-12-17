const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

function isTeacher(req, res, next) {
  if (!req.user || req.user.role !== "teacher") {
    return res.status(403).json({ error: "Teacher only" });
  }
  next();
}

function isUser(req, res, next) {
  if (!req.user || req.user.role !== "user") {
    return res.status(403).json({ error: "Student only" });
  }
  next();
}

module.exports = {
  auth,
  isTeacher,
  isUser,
};
