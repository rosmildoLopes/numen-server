const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController');
const userController = require("../controllers/userController");
router.get("/sesion", userController.ejemploSession);
router.get("/probarsesion", userController.probarSession);

module.exports = router
