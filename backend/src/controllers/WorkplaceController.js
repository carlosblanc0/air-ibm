const Workplace = require("../models/Workplace");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { company, branch, price } = req.body;
    const { user_id } = req.headers;

    const workplace = await Workplace.create({
      user: user_id,
      thumbnail: filename,
      company,
      branch: branch.split(",").map(branch => branch.trim()),
      price
    });

    return res.json({ workplace });
  },
};
