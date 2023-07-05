const { check } = require('express-validator');

const checks = [
  check('name')
    .notEmpty().withMessage('The name field is required')
    .isString().withMessage('The name field must be a string'),
  check('brand')
    .notEmpty().withMessage('The brand field is required')
    .isString().withMessage('The brand field must be a string'),
  check('price')
    .notEmpty().withMessage('The price field is required')
    .isNumeric().withMessage('The price field must be a number'),
  check('description')
    .notEmpty().withMessage('The description field is required')
    .isString().withMessage('The description field must be a string'),
  check('category')
    .notEmpty().withMessage('The category field is required')
    .isString().withMessage('The category field must be a string'),
];

module.exports = checks;
