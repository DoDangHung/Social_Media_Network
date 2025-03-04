/** @format */

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Comments", "comment_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Comments", // Tên bảng liên kết
        key: "id", // Khóa chính liên kết
      },
      onDelete: "CASCADE", // Hành vi khi xóa bản ghi
      onUpdate: "CASCADE", // Hành vi khi cập nhật bản ghi
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Comments", "comment_id");
  },
};
