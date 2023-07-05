const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const userController = require("../controllers/userController");
const checksLogin = require('../middlewares/checksLogin');
const validarChecks = require('../middlewares/validarChecks');

router.get("/session", userController.ejemploSession);
router.get("/probarsession", auth, userController.probarSession);
router.get("/cerrar", userController.borrarSession)
router.get("/hash", userController.probarHash)

router.post("/login",checksLogin,validarChecks, userController.login)
router.delete("/logout", userController.logout)

// json web token
router.get("/probarToken", userController.crearToken)
module.exports = router
