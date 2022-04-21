const Workplace = require("../models/Workplace");
const user = require("../models/User");

module.exports = {
  async index(req, res) {
    const { branch } = req.query;
    const workplace = await Workplace.find({ branch: branch });

    return res.json(workplace);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, branch, price } = req.body;
    const { user_id } = req.headers;

    if (!user) {
      return res.status(400).json({ error: "User NOT found" });
    }

    const workplace = await Workplace.create({
      user: user_id,
      thumbnail: filename,
      company,
      branch: branch.split(",").map((branch) => branch.trim()),
      price,
    });

    return res.json({ workplace });
  },
};
