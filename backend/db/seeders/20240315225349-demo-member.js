'use strict';
const { Member } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Members';
options.validate = true;

const demoMembers = [
  {
    userId: 1,
    groupId: 2,
    status: 'member',
  },
  {
    userId: 1,
    groupId: 3,
    status: 'member',
  },
  {
    userId: 2,
    groupId: 1,
    status: 'member',
  },
  {
    userId: 3,
    groupId: 2,
    status: 'member',
  },
  {
    userId: 4,
    groupId: 2,
    status: 'pending',
  },
  {
    userId: 4,
    groupId: 4,
    status: 'co-host',
  },
  {
    userId: 4,
    groupId: 5,
    status: 'member',
  },
  {
    userId: 5,
    groupId: 2,
    status: 'pending',
  },
  {
    userId: 5,
    groupId: 5,
    status: 'member',
  },
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Member.bulkCreate(demoMembers, options);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Members';
    await queryInterface.bulkDelete(options, {
    }, {});
  },
};
