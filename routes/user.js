const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const userController = require("../controllers/userController");

router.get("/session", userController.ejemploSession);
router.get("/probarsession", auth, userController.probarSession);
router.get("/cerrar", userController.borrarSession)
router.get("/hash", userController.probarHash)
module.exports = router
