/** @format */
const {
  postService,
  getPostByUser,
  deleteImage,
  findImageById,
} = require("../Services/postService");

const postController = async (req, res) => {
  try {
    const { user_id, content, images } = req.body;

    // Kiểm tra bắt buộc thông tin user_id và content
    if (!user_id || !content) {
      return res.status(400).json({
        success: false,
        message: "User ID and content are required",
      });
    }

    // Kiểm tra nếu images tồn tại thì phải là một mảng
    if (images && !Array.isArray(images)) {
      return res.status(400).json({
        success: false,
        message: "Images must be an array",
      });
    }

    // Kiểm tra định dạng ảnh base64 hợp lệ
    if (images && images.length > 0) {
      const validBase64Regex = /^data:image\/(png|jpeg|jpg);base64,/;
      for (const img of images) {
        if (!validBase64Regex.test(img.image_url)) {
          return res.status(400).json({
            success: false,
            message: "One or more images have an invalid base64 format",
          });
        }
      }
    }

    // Gọi service để tạo bài viết với ảnh
    const post = await postService(user_id, content, images);

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    console.error("Post creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Error creating post",
      error: error.message,
    });
  }
};

const getPostByUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await getPostByUser(userId);
    if (post.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Posts isn't exist",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: post,
    });
  } catch (error) {
    console.error("Post creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Error creating post",
      error: error.message,
    });
  }
};

const deleteImgController = async (req, res) => {
  const { imageId } = req.params;
  try {
    // Gọi service để tìm ảnh
    const image = await findImageById(imageId);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Gọi service để xóa ảnh
    await deleteImage(image);

    return res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the image" });
  }
};
module.exports = {
  postController,
  getPostByUserController,
  deleteImgController,
};
