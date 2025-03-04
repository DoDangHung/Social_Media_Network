/** @format */

// models/Reaction.js
module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define(
    "Reaction",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      validate: {
        eitherPostOrComment() {
          if (
            (this.post_id && this.comment_id) ||
            (!this.post_id && !this.comment_id)
          ) {
            throw new Error("Reaction phải thuộc về một post hoặc một comment");
          }
        },
      },
    }
  );

  Reaction.associate = (models) => {
    Reaction.belongsTo(models.Comment, {
      foreignKey: "comment_id",
      as: "comment",
    });
    Reaction.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
    Reaction.belongsTo(models.Post, {
      foreignKey: "post_id",
      as: "post",
    });
  };

  return Reaction;
};
