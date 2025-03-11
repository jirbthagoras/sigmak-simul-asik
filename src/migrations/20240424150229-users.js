"use strict"

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /** Add altering commands here. */
    await queryInterface.createTable("users", {
      userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    })
  },

  async down(queryInterface, Sequelize) {
    /** Add reverting commands here. */
    await queryInterface.dropTable("users")
  },
}
