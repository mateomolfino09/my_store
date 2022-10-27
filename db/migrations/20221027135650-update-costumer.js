'use strict';
const { CUSTOMER_TABLE, CustomerSchema } = require('./../models/costumer.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn(COSTUMER_TABLE, 'last_name', CustomerSchema.lastName)
    // await queryInterface.addColumn(COSTUMER_TABLE, 'phone', CustomerSchema.phone)
    // await queryInterface.addColumn(COSTUMER_TABLE, 'created_at', CustomerSchema.createdAt)
  },

  async down(queryInterface,) {
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'last_name');
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'phone')
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'created_at')
  }
};
