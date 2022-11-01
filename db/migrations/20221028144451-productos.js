'use strict';
const { CATEGORY_TABLE, CategorySchema } = require('./../models/category.model');
const { PRODUCT_TABLE, ProductSchema } = require('./../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
  },

  async down(queryInterface,) {
    await queryInterface.removeColumn(USER_TABLE, 'role')
  }
};