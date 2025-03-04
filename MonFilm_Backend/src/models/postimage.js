/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostImage extends Model {
    static associate(models) {
      PostImage.belongsTo(models.Post, { foreignKey: "post_id" });
    }
  }
  PostImage.init(
    {
      post_id: { type: DataTypes.INTEGER, allowNull: false },
      image_url: { type: DataTypes.STRING, allowNull: false },
      image_description: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "PostImage",
      timestamps: true,
    }
  );
  return PostImage;
};
