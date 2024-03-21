'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Groups';
options.validate = true;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Groups', 'organizerId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },  
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }, options);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Groups';
    await queryInterface.changeColumn('TableName', 'organizerId', options, {
        type: Sequelize.INTEGER,
        allowNull: false,
    });
  }
};
