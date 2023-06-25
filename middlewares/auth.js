module.exports = (req, res, next) =>  {
  if(!req.session.user) {
    res.json({msg: "No hay sesion registrada"})
  } else {
    next()
  }
}