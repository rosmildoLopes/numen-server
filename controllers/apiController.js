class ApiController {
  hello(req, res) {
    res.send("helooooooooooooooooooo");
  }

  verListado(req, res) {
    res.status(200).json({
      objeto1: "compu",
      objeto2: "mouse",
    });
  }

  crear(req, res) {
    res.status(201).json({
      msg: "se guardo este objeto",
      obj: req.body,
    });
  }
}

module.exports = new ApiController();
