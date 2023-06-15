const { Team } = require("../models/teams");


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
      }catch (error) {
      res.status(400).json(error);
    }
  }

  async editar(req, res) {
    try{
      await Team.findByIdAndUpdate(req.params.id, req.body)
      res.status(201).json({
        msg:"el equipo con id" + req.params.id + "se actualizo"
      });
    }catch(error) {
      res.status(400).json(error);
    }
    };
  

  borrar(req, res) {
    res.status(204).json({
      msg: "se borro este objeto",
      obj: req.body.nombre,
    });
  }
}

module.exports = new ApiController();
