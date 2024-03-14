'use strict';
const { Group } = require('../models');
const {Validator} = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Groups';
options.validate = true;

const demoGroups = [
  {
    organizerId: 1,
    name: 'Jaguars',
    about: 'A group of local Jaguars football fans who like to gather to watch games on live TV or in-person.',
    type: 'in-person',
    private: false,
    city: 'Jacksonville',
    state: 'FL'
  },
  {
    organizerId: 1,
    name: 'Beach Bicyclers',
    about: 'A group of crazy locals who like to ride their bikes at the beach.',
    type: 'in-person',
    private: false,
    city: 'Daytona Beach',
    state: 'FL'
  },
  {
    organizerId: 2,
    name: 'Motor City Moms',
    about: 'We are moms who live in Detroit and like to gather together for various activities. Come join us!',
    type: 'in-person',
    private: false,
    city: 'Detroit',
    state: 'MI'
  },
  {
    organizerId: 3,
    name: 'Chicago Realtors Group',
    about: 'We are a networking group of realtors who like to gather for training and social events from time to time.',
    type: 'in-person',
    private: false,
    city: 'Chicago',
    state: 'IL'
  },
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Group.bulkCreate(demoGroups, options);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Groups';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Jaguars', 'Beach Bicyclers', 'Motor City Moms', 'Chicago Realtors Group'] }
    }, {});
  },
};
