require("dotenv").config();

// const authUser = (req, res, next) => {
//   if (req.body == null) {
//     res.status(403);
//     return res.send(req);
//   }
//   next();
// };

// const authAdmin = (username, password) => {
//   return (req, res, next) => {
//     if (!req.body.username || !req.body.password) {
//       res.redirect("/admin/login");
//     } else {
//       if (req.body.username !== username || req.body.password !== password) {
//         res.redirect("/admin");
//       } else {
//         next();
//       }
//     }
//   };
// };

// module.exports = { authUser, authAdmin };

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" });
        } else {
          next();
        }
      }
    });
  } else {
    res.redirect("/admin/login");
  }
};
