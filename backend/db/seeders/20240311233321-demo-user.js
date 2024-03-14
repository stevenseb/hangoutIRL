'use strict';
const { User } = require('../models');
const bcrypt = require("bcryptjs");
const {Validator} = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Users';
options.validate = true;

const demoUsers = [
  {
    firstName: 'Bob',
    lastName: 'Evans',
    email: 'bob@evans.com',
    username: 'Breakfast',
    hashedPassword: bcrypt.hashSync('greeneggs$521')
  },
  {
    firstName: 'Michael',
    lastName: 'Jordan',
    email: 'Mike@airjordan.com',
    username: 'Airforce1',
    hashedPassword: bcrypt.hashSync('getsomeair@345')
  },
  {
    firstName: 'Mr',
    lastName: 'Bean',
    email: 'bean@funny.com',
    username: 'FrankNbeans',
    hashedPassword: bcrypt.hashSync('crazy1in##490')
  }
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      return User.bulkCreate(demoUsers, options);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Breakfast', 'Airforce1', 'FrankNbeans'] }
    }, {});
  },
};
