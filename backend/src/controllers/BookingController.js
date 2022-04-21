const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { workplace_id } = req.params;
    const { date } = req.body;
    const booking = await Booking.create({
      user: user_id,
      workplace: workplace_id,
      date,
    });
    //await booking.populate("workplace").populate("user").execPopulate();
    await booking.populate(["workplace", "user"]);

    return res.json(booking);
  },
};
