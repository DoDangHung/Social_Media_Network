/** @format */

// validators/commentValidator.js
const Joi = require("joi");

const commentSchema = Joi.object({
  content: Joi.string().required().min(1).max(1000),
  postId: Joi.number().required(),
  reaction: Joi.string()
    .valid("like", "love", "haha", "sad", "angry")
    .optional(),
});

const reactionSchema = Joi.object({
  type: Joi.string().valid("like", "love", "haha", "sad", "angry").required(),
});

module.exports = {
  validateComment: (data) => commentSchema.validate(data),
  validateReaction: (data) => reactionSchema.validate(data),
};
