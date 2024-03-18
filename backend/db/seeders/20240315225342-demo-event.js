'use strict';
const { Event } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Events';
options.validate = true;

const demoEvents = [
  {
    "groupId": 1,
    "venueId": 1,
    "name": "Poker Game Followed By PGA Tournament Watch Party",
    "type": "In person",
    "capacity": 20,
    "price": 25.00,
    "description": "A friendly game of poker with $25 buy-in followed by the PGA tournament on TV with some drinks and food.",
    "startDate": "2024-11-19 17:00:00",
    "endDate": "2024-11-19 21:00:00",
  },
  {
    "groupId": 2,
    "venueId": 2,
    "name": "Beach Bicylclers First Meeting",
    "type": "In person",
    "capacity": 60,
    "price": 0,
    "description": "For our first meeting we will have a guest speaker from one of our local bike shops about some new gear and we will take a quick riding tour.",
    "startDate": "2024-10-19 17:00:00",
    "endDate": "2024-10-19 19:00:00",
  },
  {
    "groupId": 5,
    "venueId": 3,
    "name": "Walk on the Waterfront.",
    "type": "In person",
    "capacity": 30,
    "price": 15.00,
    "description": "We will take a guided walking tour of the San Diego old district as well as along the waterfront.",
    "startDate": "2024-10-28 16:00:00",
    "endDate": "2024-10-28 18:00:00",
  },
  {
    "groupId": 3,
    "venueId": 4,
    "name": "Guest Speaker on Child Health",
    "type": "In person",
    "capacity": 50,
    "price": 5.00,
    "description": "We will be gathering at our usual spot. Food and beverages are available for purchase on-site and we have two special guest speakers.",
    "startDate": "2024-09-28 12:00:00",
    "endDate": "2024-09-28 15:00:00",
  },
  {
    "groupId": 4,
    "venueId": 5,
    "name": "Upcoming Real Estate Trends",
    "type": "In person",
    "capacity": 20,
    "price": 25.33,
    "description": "Sandra Carter of the Dalas Area Realtor Association will be giving a detailed overview of market trends and data.",
    "startDate": "2024-10-19 17:00:00",
    "endDate": "2024-10-19 19:00:00",
  },
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Event.bulkCreate(demoEvents, { validate: true });
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Events';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      name: { [Op.in]: ["Poker Game Followed By PGA Tournament Watch Party", "Beach Bicylclers First Meeting", "Walk on the Waterfront.", "Guest Speaker on Child Health", "Upcoming Real Estate Trends"] }
    }, {});
  },
};
