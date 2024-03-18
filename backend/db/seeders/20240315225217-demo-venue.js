'use strict';
const { Venue } = require('../models');
const {Validator} = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Venues';
options.validate = true;

const demoVenues = [
  {
    groupId: 1,
    name: 'House of Blues Las Vegas',
    address: '3950 S Las Vegas Blvd',
    city: 'Las Vegas',
    state: 'NV',
    lat: 36.093044,
    lng: -115.175564,
  },
  {
    groupId: 2,
    name: 'Wrightsville Beach Brewery',
    address: '6201 Oleander Dr',
    city: 'Wilmington',
    state: 'NC',
    lat: 34.210882,
    lng: -77.836892,
  },
  {
    groupId: 5,
    name: 'Hilton San Diego Bayfront',
    address: '1 Park Blvd',
    city: 'San Diego',
    state: 'CA',
    lat: 32.70326,
    lng: -117.158184,
  },
  {
    groupId: 3,
    name: 'Memphis Hilton',
    address: '939 Ridge Lake Blvd',
    city: 'Memphis',
    state: 'TN',
    lat: 35.104942,
    lng: -89.868683,
  },
  {
    groupId: 4,
    name: 'Billy Can Can',
    address: ' 2386 Victory Park Ln',
    city: 'Dallas',
    state: 'TX',
    lat: 32.787112,
    lng: -96.809145,
  },
]
  

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Venue.bulkCreate(demoVenues, { validate: true });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Venues';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['House of Blues Las Vegas', 'Wrightsville Beach Brewery', 'Hilton San Diego Bayfront', 'Memphis Hilton', 'Billy Can Can'] }
    }, {});
  }
};
