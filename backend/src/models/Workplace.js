const mongoose = require("mongoose");
const WorkplaceSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  branch: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

WorkplaceSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:8080/files/${this.thumbnail}`;
});
module.exports = mongoose.model("Workplace", WorkplaceSchema);
