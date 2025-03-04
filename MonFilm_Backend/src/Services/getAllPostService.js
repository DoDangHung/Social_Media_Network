/** @format */

const { Post, PostImage, User } = require("../models");

const getAllPostService = async (userId, content) => {
  try {
    const res = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "username", "avatar_url"],
        },
        {
          model: PostImage,
          attributes: ["id", "image_url", "image_description"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return res;
  } catch (error) {
    throw new Error(`Error creating post with images: ${error.message}`);
  }
};

module.exports = { getAllPostService };
