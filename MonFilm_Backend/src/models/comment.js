/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, { foreignKey: "post_id" });
      Comment.belongsTo(models.User, { foreignKey: "user_id" });
      Comment.belongsTo(models.Comment, {
        foreignKey: "comment_id",
        as: "parentComment",
      }); // Quan hệ mới
      Comment.hasMany(models.Comment, {
        foreignKey: "comment_id",
        as: "replies",
      }); // Nếu có trả lời
    }
  }
  Comment.init(
    {
      post_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      comment_id: { type: DataTypes.INTEGER, allowNull: true }, // Trường mới
    },
    {
      sequelize,
      modelName: "Comment",
      timestamps: true,
    }
  );
  return Comment;
};
