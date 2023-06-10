const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
router.get("/hello", apiController.hello);
router.get("/ver", apiController.verListado);
router.get("/listado/categoria/categoria", apiController.listadoPorCategoria);
router.get("/buscar/id/:id", apiController.buscarPorId);
router.get("/buscar/nombre/:nombre", apiController.buscarPorClub);
router.post("/crear", apiController.crear);
router.put("/editar", apiController.editar);

module.exports = router;
