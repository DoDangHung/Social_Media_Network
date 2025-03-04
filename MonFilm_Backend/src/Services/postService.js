/** @format */

const fs = require("fs");
const path = require("path");
const { Post, PostImage } = require("../models");

const postService = async (user_id, content, images) => {
  try {
    const uploadDir = path.join(__dirname, "../../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const post = await Post.create({
      user_id,
      content,
    });

    if (images && images.length > 0) {
      const imagePromises = images.map(async (img) => {
        const base64Image = img.image_url.startsWith("data:")
          ? img.image_url.split(",")[1]
          : img.image_url;
        const buffer = Buffer.from(base64Image, "base64");

        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}.png`;
        const uploadPath = path.join(uploadDir, fileName);

        fs.writeFileSync(uploadPath, buffer);

        return PostImage.create({
          post_id: post.id,
          image_url: `/api/uploads/${fileName}`,
          image_description: img.image_description,
        });
      });

      await Promise.all(imagePromises);
    }

    const postWithImages = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: PostImage,
          attributes: ["image_url", "image_description"],
        },
      ],
    });

    return postWithImages;
  } catch (error) {
    throw new Error(`Error creating post with images: ${error.message}`);
  }
};

const getPostByUser = async (userId) => {
  try {
    if (!userId) {
      return {
        errCode: 2,
        errMessage: `Posts isn't exist!`,
      };
    }
    const post = await Post.findAll({
      where: { user_Id: userId },
      include: [
        {
          model: PostImage,
          attributes: ["image_url", "image_description"],
        },
      ],
      order: [["created_at", "DESC"]],
    });
    return post;
  } catch (error) {
    throw new Error(`Error creating post with images: ${error.message}`);
  }
};

const findImageById = async (imageId) => {
  return await PostImage.findByPk(imageId);
};

const deleteImage = async (image) => {
  await image.destroy();
};
module.exports = { postService, getPostByUser, deleteImage, findImageById };
