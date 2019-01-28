const auth = require('basic-auth');

var bcrypt = require('bcrypt-nodejs')
var user = require('../models/user')

module.exports.basic = async function (request, response, next) {
  // Check for Credentials
  if (!request.headers.authorization) {
    return response.status(403).json({ error: 'This credential is not valid!' });
  }

  
  // Find User
  //const user = user.findBy({ name: request.headers.authorization})
  //const match = await bcrypt.compare(password, user.passwordHash);

  /* const match = await bcrypt.compare(password, user.passwordHash);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  } */
  return next();
};