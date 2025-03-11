"use strict"

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /** Add altering commands here. */
    await queryInterface.createTable("backup_metadata", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ext: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mimeType: {
        type: Sequelize.STRING(129),
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    /** Add reverting commands here. */
    await queryInterface.dropTable("backup_metadata")
  },
}
