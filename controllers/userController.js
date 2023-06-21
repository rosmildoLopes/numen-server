class UserController {
  ejemploSession(req, res) {
    const user = {
      nombre: "Rosmi",
      edad: 28
    }
    req.session.user = user
    res.json(req.session)
  }
  probarSession(req, res){
    res.json(req.session)
  }

}

module.exports = new UserController 