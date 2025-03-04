/** @format */

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("users");
    if (!tableInfo.avatar_url) {
      await queryInterface.addColumn("users", "avatar_url", {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "avatar_url");
  },
};
