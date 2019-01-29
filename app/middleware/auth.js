'use strict'

module.exports.basic = async function (req, res, next) {
  const auth = require('basic-auth');
  var bcrypt = require('bcrypt-nodejs')
  const User = require('../models').User;
   // Grab the "Authorization" header.
   var authorization = req.get("authorization");

  // Check for Credentials
  if (!authorization) {
    return response.status(403).json({ error: 'This credential is not valid!' });
  }

   // On the first request, the "Authorization" header won't exist, so we'll set a Response
   // header that prompts the browser to ask for a username and password.
   if (!authorization) {
     // show the Access Restricted error message.
      return response.status(401).json({ error: 'This credential is not valid!' });
   } else {
     // If the user enters a username and password, the browser re-requests the route
     // and includes a Base64 string of those credentials.
     var credentials = new Buffer(authorization.split(" ").pop(), "base64").toString("ascii").split(":");
     const user = await User.findOne({ where: { username: credentials[0] } })
    
     if (credentials[0] === user.username && bcrypt.compareSync(credentials[1], user.password)) {
       // The username and password are correct, so the user is authorized.
       return res.send("Access Granted!");
     } else {
       // The user typed in the username or password wrong.
       return res.status(403).send("Access Denied (incorrect credentials)");
     }
   }

  
  // Find User
  const user = User.findAll({ limit: 1, where: { username: request.headers.authorization } })

  console.log(user);
  
  /* const match = await bcrypt.compare(password, user.passwordHash);


  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  } */
  return next();
};