const bcrypt = require("bcryptjs");
const {User} = require("../models/users")
const generadorToken = require('../utils/generador')

class UserController {
  ejemploSession(req, res) {
    const user = {
      nombre: "Rosmi",
      edad: 28,
    };
    req.session.user = user;
    res.cookie("miPrimeraCookie", user.nombre, { maxAge: 120000 });
    res.json(req.session);
  }
  probarSession(req, res) {
    res.json({ session: req.session, cookie: req.cookies.sessionDelUsuario });
  }

  borrarSession(req, res) {
    req.session.destroy();
    res.clearCookie("miPrimeraCookie");
    res.json({ msg: "sesion cerrada" });
  }

  probarHash(req, res) {
    const contraseña = "123456789";
    let salt = bcrypt.genSaltSync(15);
    let hash = bcrypt.hashSync(contraseña, salt);
    let comparacion1 = bcrypt.compareSync(contraseña, hash);
    let comparacion2 = bcrypt.compareSync("hola", hash);

    res.json({ hash, comparacion1, comparacion2 });
  }

  async login(req, res) {
    try{
      const persona = await User.findOne({email: req.body.email})
      if (persona == null){
        res.json({msg:" la contraseña o el mail  es invalido"})
      }
      if(!bcrypt.compareSync(req.body.password, persona.password)) {
        res.json({msg: "la contraseña o el mail es invalido"})
      }

      const user = {
        _id: persona.id,
        name: persona.name
      }
      req.session.user = user
      if(req.body.remember){
        res.cookie("sessionDelUsuario", req.session.user,{maxAge:120000})
        res.json({msdg:" se creo  la sesion"})
      }
    } catch(error) {
      res.json(error)
    }
  }
  logout(req,res){
    res.clearCookie("sessionDelUsuario")
    req.session.destroy()
    res.json({
      msg: "sesion cerrada"
    })
  }

  crearToken(req, res) {
    const token = generadorToken(req.body)
    res.json()
  }
}

module.exports = new UserController();
