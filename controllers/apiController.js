const { Team } = require("../models/teams");
const { validatorResult }

class ApiController {
  hello(req, res) {
    res.send("helooooooooooooooooooo");
  }

  async verListado(req, res) {
    const equipos = await Team.find();
    res.status(200).json(equipos);
  }

  async listadoPorCategoria(req, res) {
    const equipos = await Team.find({categoria: req.params.categoria});
    res.status(200).json(equipos);
  }

  async buscarPorId(req, res) {
    const equipos = await Team.findById(req.params.id)
    res.status(200).json(equipos);
  }

  async buscarPorClub(req, res) {
    const equipos = await Team.findOne({nombre:req.params.nombre})
    res.status(200).json(equipos);
  }

  async crear(req, res) {
    try {
      const equipoGuardado = await new Team(req.body);
      await equipoGuardado.save();
      res.status(201).json(equipoGuardado);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  editar(req, res) {
    res.status(201).json({
      msg: "se edito este objeto",
      obj: req.body.nombre,
    });
  }

  borrar(req, res) {
    res.status(204).json({
      msg: "se borro este objeto",
      obj: req.body.nombre,
    });
  }
}

module.exports = new ApiController();
