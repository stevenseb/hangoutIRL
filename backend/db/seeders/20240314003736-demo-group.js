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
    name: 'Gametime',
    about: 'A group of local sports fans who like to gather to watch games on live TV or In person.',
    type: 'In person',
    private: false,
    city: 'Las Vegas',
    state: 'NV'
  },
  {
    organizerId: 2,
    name: 'Beach Bicyclers',
    about: 'A group of crazy locals who like to ride their bikes at the beach.',
    type: 'In person',
    private: false,
    city: 'Wilmington',
    state: 'NC'
  },
  {
    organizerId: 3,
    name: 'Memphis Moms',
    about: 'We are moms who live in Memphis and like to gather together for various activities. Come join us!',
    type: 'In person',
    private: false,
    city: 'Memphis',
    state: 'TN'
  },
  {
    organizerId: 4,
    name: 'Dallas Realtors Group',
    about: 'We are a networking group of realtors who like to gather for training and social events from time to time.',
    type: 'In person',
    private: false,
    city: 'Dallas',
    state: 'TX'
  },
  {
    organizerId: 5,
    name: 'San Diego Walking Tours',
    about: 'We are a group that does walking tours or other guided tours with a guest expert historian or guide.',
    type: 'In person',
    private: false,
    city: 'San Diego',
    state: 'CA'
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
    await queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Gametime', 'Beach Bicyclers', 'Memphis Moms', 'Dallas Realtors Group', 'San Diego Walking Tours'] }
    }, {});
  },
};
