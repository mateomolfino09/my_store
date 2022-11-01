'use strict';
const { Order_Product_Schema, ORDER_PRODUCT__TABLE } = require('../models/order-product.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_PRODUCT__TABLE, Order_Product_Schema)
  },

  async down(queryInterface,) {
    await queryInterface.dropTable(ORDER_PRODUCT__TABLE)
  }
};