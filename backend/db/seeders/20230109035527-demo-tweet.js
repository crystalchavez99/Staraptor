'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Tweets';
    return queryInterface.bulkInsert(options, [
      {
        media: 'https://res.cloudinary.com/dreambssd/image/upload/v1654026648/Pokezon_w0gqb6.png',
        message: 'Hello World!',
        user_id: 1
      },
      {
        media: 'https://res.cloudinary.com/dreambssd/image/upload/v1654026648/Pokezon_w0gqb6.png',
        message: 'Huzzah!',
        user_id: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Tweets';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      user_id: { [Op.in]: [1,2,3] }
    }, {});
  }
};
