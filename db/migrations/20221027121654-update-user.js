'use strict';
const { USER_TABLE, UserSchema } = require('./../models/user.model');
const { Model, DataTypes, Sequelize } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'role', {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'customer'
    });
  },

  async down(queryInterface,) {
    await queryInterface.removeColumn(USER_TABLE, 'role')
  }
};
