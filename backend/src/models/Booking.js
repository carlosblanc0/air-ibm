const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  workplace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workplace",
    toJSON: { virtuals: true },
  },

});

module.exports = mongoose.model("Booking", BookingSchema);
