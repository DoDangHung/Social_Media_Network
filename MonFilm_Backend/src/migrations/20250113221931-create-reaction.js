/**
 * @format
 * @type {import('sequelize-cli').Migration}
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.ENUM("like", "love", "haha", "sad", "angry"), // Định nghĩa các giá trị cho ENUM
        allowNull: false,
      },
      comment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "comments",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Tạo indexes để tối ưu truy vấn
    await queryInterface.addIndex("reactions", ["comment_id"]);
    await queryInterface.addIndex("reactions", ["user_id"]);
    await queryInterface.addIndex("reactions", ["type"]);
  },

  async down(queryInterface, Sequelize) {
    // Trước khi xóa bảng, cần xóa type ENUM
    await queryInterface.dropTable("reactions");
    await queryInterface.sequelize.query(
      "DROP TYPE IF EXISTS enum_reactions_type;"
    );
  },
};
