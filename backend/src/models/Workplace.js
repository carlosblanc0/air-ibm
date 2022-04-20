const mongoose = require('mongoose')
const WorkplaceSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  branch: [String],
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }
})

module.exports = mongoose.model('Workplace', WorkplaceSchema)
