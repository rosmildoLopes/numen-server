const { Perfum } = require("../models/perfums");
const validarId = async (req, res, next) => {
  const busqueda = await Perfum.findById(req.params.id);
  if (busqueda !== null) {
    next();
  } else {
    res.status(500).json({
      msg: "el id + req.params.id es invalido",
    });
  }
};

module.exports = validarId;
