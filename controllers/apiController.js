const { Perfum } = require("../models/perfums");

class ApiController {
  hello(req, res) {
    res.send("The perfume world!");
  }

  async verListado(req, res) {
    const perfumes = await Perfum.find();
    res.status(200).json(perfumes);
  }

  async listadoPorCategoria(req, res) {
    const perfumes = await Perfum.find({ categoria: req.params.categoria });
    res.status(200).json(perfumes);
  }

  async buscarPorId(req, res) {
    const perfumes = await Perfum.findById(req.params.id);
    res.status(200).json(perfumes);
  }

  async buscarPorClub(req, res) {
    const perfumes = await Perfum.findOne({ nombre: req.params.nombre });
    res.status(200).json(perfumes);
  }

  async crear(req, res) {
    try {
      const perfumeGuardado = await new Perfum(req.body);
      await perfumeGuardado.save();
      res.status(201).json(perfumeGuardado);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async editar(req, res) {
    try {
      await Perfum.findByIdAndUpdate(req.params.id, req.body);
      const perfumes = await Perfum.findById(req.params.id);
      res.status(200).json(perfumes);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async borrar(req, res) {
    await Perfum.findByIdAndDelete(req.params.id);
    res.status(201).json({
      msg: "This item has been deleted",
    });
  }
}

module.exports = new ApiController();
