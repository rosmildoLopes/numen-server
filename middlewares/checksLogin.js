const { check } = require("express-validator");

const checksLogin = [
  check("email")
    .notEmpty()
    .withMessage("This field is required")
    .isString()
    .withMessage("This field must be a String")
    .isEmail()
    .withMessage("This field must be an email"),
  check("password")
    .notEmpty()
    .withMessage("The password field is required")
    .isString()
    .withMessage("The password field must be a String"),
];

module.exports = checksLogin;
