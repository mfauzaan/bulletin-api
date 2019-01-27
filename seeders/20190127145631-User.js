'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Create Users Using Seed
    return queryInterface.bulkInsert('users', [{
      username: 'Tim',
      password: 'secret'
    },{
      username: 'Gibson',
      password: 'secret'
    },{
      username: 'Fauzaan',
      password: 'secret'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Reverse Users
    return queryInterface.bulkDelete('users', null, {})
  }
};
