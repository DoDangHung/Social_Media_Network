/** @format */

const { DeletePostService } = require("../Services/DeletePostService");

const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await DeletePostService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { deletePostController };
