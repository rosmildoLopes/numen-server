const { Schema, model } = require('mongoose');

const schema = new Schema({
  nombre:{
    type: String,
    required:true
  },
  ciudad:{
    type: String,
    required:true
  },
  torneosGanados:{
    type: Number,
    required:true
  },
  alias:{
    type: String
  },
  categoria:{
    type: String,
    required:true
  }
})

const Perfum = model('Perfum', schema);
module.exports = { Perfum }