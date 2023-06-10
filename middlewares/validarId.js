const { Team } = require('../models/teams')
const validarId = (req, res, next ) => {
  const busqueda = await Team.findById(req.params.id)
  if(busqueda !== null){
    next()
  } else {
    rest.status(500).json({msg:"el id" + req.params.id "es invalido"})
  }
}