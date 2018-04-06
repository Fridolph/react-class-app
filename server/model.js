const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/react-class-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongoDB connect success')
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('user', userSchema)