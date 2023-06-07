class ApiController {
  hello (req, res) {
    res.send("helooooooooooooooooooo");
  }

  verListado (req, res) {
    res.status(200).json({
      objeto1: "compu",
      objeto2: "mouse",
    });
  }

  crear (req, res) {
    res.status(201).json({
      msg: "se guardo este objeto",
      obj: req.body.nombre
    });
  }

  editar (req, res){
    res.status(201).json({
      msg: "se edito este objeto",
      obj: req.body.nombre
    });
  }

  borrar (req, res){
    res.status(204).json({
      msg: "se borro este objeto",
      obj: req.body.nombre
    });
  }
}

module.exports = new ApiController();
