const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
  user: String,
  message: String,
  time: String,
  date: String,
})

schema.set('toJSON', { 
  transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id.toString()
  delete returnedObject._id
  delete returnedObject.__v
}
})

module.exports = mongoose.model('Message', schema)