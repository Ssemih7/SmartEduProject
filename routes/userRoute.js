const express = require("express");
const authController = require("../controlles/authController");
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.route("/signup").post(authController.creatUser);// http://localhost:3000/users/signup
router.route("/login").post(authController.loginUser);// http://localhost:3000/users/signup
router.route("/logout").get(authController.logoutUser);
router.route("/dashboard").get(authMiddleware, authController.getDashboardPage);

module.exports = router;
