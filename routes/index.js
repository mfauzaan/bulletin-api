'use strict'

// Declarations
var express = require('express');
var router = express.Router();

// Variables
const apiVersion = process.env.API_VERSION
const apiPrefix = process.env.API_PREFIX

/*
|--------------------------------------------------------------------------
| Index Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
*/

/* Home Route */
router.get('/', function(req, res) {
  // Send details of the Appilcation to Homescreen
  res.send({ application: 'Bulletin API', version: apiVersion, owner: 'https://socar.my' })
});

module.exports = router;
