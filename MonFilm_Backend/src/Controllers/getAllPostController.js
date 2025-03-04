/** @format */

const { getAllPostService } = require("../Services/getAllPostService");

const getAllPostController = async (req, res) => {
  try {
    const posts = await getAllPostService();
    return res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({ message: "Error fetching posts" });
  }
};

module.exports = { getAllPostController };
