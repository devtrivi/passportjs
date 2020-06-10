var express = require("express");
var router = express.Router();

// get /register
router.get("/register", (req, res, next) => {
  res.render("llegaste a /register");
});
// get /login
router.get("/login", (req, res, next) => {});
res.render("login");
// get /public
router.get("/public", (req, res, next) => {});
res.render("public");
// get /private
router.get("/private", (req, res, next) => {});
res.render("private");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
