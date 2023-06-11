const { Team } = require('../models/teams')
const validarId = async (req, res, next ) => {
  const busqueda = await Team.findById(req.params.id)
  if(busqueda !== null){
    next()
  } else {
    res.status(500).json({
      msg:"el id + req.params.id es invalido"
    })
  }
}

module.exports = {validarId}