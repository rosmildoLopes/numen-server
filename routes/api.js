const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
router.get("/hello", apiController.hello);
router.get("/ver", apiController.verListado);
router.post("/crear", apiController.crear);

module.exports = router;