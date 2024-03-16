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
    "name": "Poker Game Followed By PGA Tournament Watch Party",
    "type": "In person",
    "capacity": 20,
    "price": 25.00,
    "description": "A friendly game of poker with $25 buy-in followed by the PGA tournament on TV with some drinks and food.",
    "startDate": "2024-11-19 17:00:00",
    "endDate": "2024-11-19 21:00:00",
  },
  {
    "groupId": 5,
    "venueId": 3,
    "name": "Poker Game Followed By PGA Tournament Watch Party",
    "type": "In person",
    "capacity": 20,
    "price": 25.00,
    "description": "A friendly game of poker with $25 buy-in followed by the PGA tournament on TV with some drinks and food.",
    "startDate": "2024-11-19 17:00:00",
    "endDate": "2024-11-19 21:00:00",
  },
  {
    "groupId": 3,
    "venueId": 4,
    "name": "Poker Game Followed By PGA Tournament Watch Party",
    "type": "In person",
    "capacity": 20,
    "price": 25.00,
    "description": "A friendly game of poker with $25 buy-in followed by the PGA tournament on TV with some drinks and food.",
    "startDate": "2024-11-19 17:00:00",
    "endDate": "2024-11-19 21:00:00",
  },
  {
    "groupId": 4,
    "venueId": 5,
    "name": "Poker Game Followed By PGA Tournament Watch Party",
    "type": "In person",
    "capacity": 20,
    "price": 25.33,
    "description": "A friendly game of poker with $25 buy-in followed by the PGA tournament on TV with some drinks and food.",
    "startDate": "2024-11-19 17:00:00",
    "endDate": "2024-11-19 21:00:00",
  },
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Event.bulkCreate(demoEvents, options);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Events';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Breakfast', 'Airforce1', 'FrankNbeans', 'jdough', 'dmatt'] }
    }, {});
  },
};
