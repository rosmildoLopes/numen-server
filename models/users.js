const { Schema, model } = require('mongoose');

const schema = new Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  password:{
    type: Number,
    required:true
  }
})

const User = model('User', schema);
module.exports = { User }