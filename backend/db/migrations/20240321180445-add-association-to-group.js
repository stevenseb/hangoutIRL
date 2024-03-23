'use strict';
let options = {};
options.tableName = 'Groups'; // define your table name in options object

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(options, 'organizerId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },  
      onDelete: 'CASCADE'
    }, options);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(options, 'organizerId', {
        type: Sequelize.INTEGER,
        allowNull: false,
    });
  }
};
