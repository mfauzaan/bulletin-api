'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
    
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};