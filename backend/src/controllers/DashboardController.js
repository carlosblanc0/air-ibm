const Workplace = require("../models/Workplace");

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;
    const workplace = await Workplace.find({ user: user_id });

    return res.json(workplace);
  },
};
