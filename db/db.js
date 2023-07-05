const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN)
    console.log('Database connected successfully') 
  } catch{
    console.log('Unable to establish a connection')
  }
}

module.exports = {connect}