/** @format */

const { Post, PostImage } = require("../models");

const DeletePostService = async (id) => {
  const deletedCount = await Post.destroy({
    where: { id },
  });

  if (deletedCount === 0) {
    throw new Error("Post not found");
  }

  return { message: "Post deleted successfully" };
};

module.exports = { DeletePostService };
