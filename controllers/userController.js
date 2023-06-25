const bcrypt = require("bcryptjs");

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
    res.json({ session: req.session, cookie: req.cookie.miPrimeraCookie });
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
}

module.exports = new UserController();
