const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  age: {
    type: Number,
    requied: true,
  },
  designation: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('User', userSchema)
