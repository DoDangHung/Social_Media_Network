/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.Post, { foreignKey: "post_id" });
      Like.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Like.init(
    {
      post_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Like",
      timestamps: true,
      uniqueKeys: {
        unique_like: {
          fields: ["post_id", "user_id"],
        },
      },
    }
  );
  return Like;
};
