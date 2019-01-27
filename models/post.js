'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image_url: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};