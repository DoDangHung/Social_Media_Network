/** @format */

const express = require("express");
const {
  postController,
  getPostByUserController,
  deleteImgController,
} = require("../Controllers/postController");
const { getAllPostController } = require("../Controllers/getAllPostController");
const { deletePostController } = require("../Controllers/DeletePostController");

const router = express.Router();

router.post("/posts", postController);
router.get("/get-all-post", getAllPostController);
router.get("/posts/user/:userId", getPostByUserController);
router.delete("/:id", deletePostController);

//delete images
router.delete("/postImg/:imageId", deleteImgController);
module.exports = router;
