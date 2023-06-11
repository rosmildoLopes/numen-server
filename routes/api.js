const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const { validarId } =require('../middlewares/validarId');
const { check } = require('express-validator')


router.get("/hello", apiController.hello);
router.get("/ver", apiController.verListado);
router.get("/listado/categoria/categoria", apiController.listadoPorCategoria);
router.get("/buscar/id/:id", validarId, apiController.buscarPorId);
router.get("/buscar/nombre/:nombre", apiController.buscarPorClub);
router.post("/crear",[
  check('nombre').notEmpty().withMessage('El campo nombre es obligatorio').isString().withMessage('este campo debe ser un string')
  check('ciudad').notEmpty().withMessage('El campo ciudad es obligatorio').isString().withMessage('este campo debe ser un string')
  check('torneosGanados').notEmpty().withMessage('El campo torneosGanados es obligatorio').isString().withMessage('este campo debe ser un string')
  check('alias').notEmpty().withMessage('El campo alias es obligatorio').isString().withMessage('este campo debe ser un string')
  check('categoria').notEmpty().withMessage('El campo categoria es obligatorio').isString().withMessage('este campo debe ser un string')
], apiController.crear);
router.put("/editar", apiController.editar);

module.exports = router;
