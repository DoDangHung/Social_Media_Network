/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "user_id" });
      Post.hasMany(models.PostImage, { foreignKey: "post_id" });
      Post.hasMany(models.Like, { foreignKey: "post_id" });
      Post.hasMany(models.Comment, { foreignKey: "post_id" });
    }
  }
  Post.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "Post",
      timestamps: true,
    }
  );
  return Post;
};
