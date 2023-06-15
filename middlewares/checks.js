const { check } = require('express-validator');


const checks = [
  check('nombre')
    .notEmpty().withMessage('El campo nombre es obligatorio')
    .isString().withMessage('este campo debe ser un string'),
  check('ciudad')
    .notEmpty().withMessage('El campo ciudad es obligatorio')
    .isString().withMessage('este campo debe ser un string'),
  check('torneosGanados').notEmpty()
    .withMessage('El campo torneosGanados es obligatorio')
    .isNumeric().withMessage('este campo debe ser un string'),
  check('alias')
    .notEmpty().withMessage('El campo alias es obligatorio')
    .isString().withMessage('este campo debe ser un string'),
  check('categoria')
    .notEmpty().withMessage('El campo categoria es obligatorio')
    .isString().withMessage('este campo debe ser un caracter'),
]

module.exports = checks;