require("dotenv").config();

const authUser = (req, res, next) => {
  if (req.body == null) {
    res.status(403);
    return res.send(req);
  }
  next();
};

const authAdmin = (username, password) => {
  return (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      res.redirect("/admin/login");
    } else {
      if (req.body.username !== username || req.body.password !== password) {
        res.redirect("/admin");
      } else {
        next();
      }
    }
  };
};

module.exports = { authUser, authAdmin };
