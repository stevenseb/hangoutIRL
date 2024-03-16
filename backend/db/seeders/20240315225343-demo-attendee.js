'use strict';
const { Attendee } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Attendees';
options.validate = true;

const demoAttendees = [
  {
    userId: 1,
    eventId: 2,
    status: 'attending',
  },
  {
    userId: 1,
    eventId: 4,
    status: 'attending',
  },
  {
    userId: 2,
    eventId: 1,
    status: 'attending',
  },
  {
    userId: 3,
    eventId: 2,
    status: 'attending',
  },
  {
    userId: 4,
    eventId: 5,
    status: 'attending',
  },
  {
    userId: 4,
    eventId: 4,
    status: 'pending',
  },
  {
    userId: 5,
    eventId: 4,
    status: 'waitlist',
  },
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Attendee.bulkCreate(demoAttendees, options);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Attendees';
    await queryInterface.bulkDelete(options, {
    }, {});
  },
};
