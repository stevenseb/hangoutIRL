'use strict';
const { GroupImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'GroupImages';
options.validate = true;

const demoGroupImages = [
  {
    groupId: 1,
    url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXBzfGVufDB8fDB8fHww',
    preview: true,
  },
  {
    groupId: 2,
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXBzfGVufDB8fDB8fHww',
    preview: true,
  },
  {
    groupId: 3,
    url: 'https://unsplash.com/photos/men-and-women-sitting-and-standing-while-staring-at-laptop-p74ndnYWRY4',
    preview: true,
  },
  {
    groupId: 4,
    url: 'https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3Vwc3xlbnwwfHwwfHx8MA%3D%3D',
    preview: true,
  },
  {
    groupId: 4,
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyb3Vwc3xlbnwwfHwwfHx8MA%3D%3D',
    preview: false,
  },
  {
    groupId: 5,
    url: 'https://unsplash.com/photos/people-sitting-on-gray-metal-chairs-during-daytime-e5juUFoRHpE',
    preview: true,
  },
  {
    groupId: 5,
    url: 'https://unsplash.com/photos/sittin-people-beside-table-inside-room-hCb3lIB8L8E',
    preview: false,
  },
]
  

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await GroupImage.bulkCreate(demoGroupImages, options);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'GroupImages';
    await queryInterface.bulkDelete(options, {
    }, {});
  }
};
