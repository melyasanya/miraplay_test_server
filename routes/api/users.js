const express = require("express");
const { register, login, logout } = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { loginAndRegisterSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(loginAndRegisterSchema),
  ctrlWrapper(register)
);

router.post("/login", validateBody(loginAndRegisterSchema), ctrlWrapper(login));

router.post("/logout", authenticate, ctrlWrapper(logout));

module.exports = router;
