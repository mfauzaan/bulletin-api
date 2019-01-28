'use strict'

const express = require('express');
const router = express.Router();

// Configuration
const apiVersion = 1
const apiPrefix = `/api/v${apiVersion}`

/* Home Route */
router.get('/', function(req, res) {
  // Send details of the Appilcation to Homescreen
  res.send({ application: 'Bulletin API', version: 1, owner: 'https://socar.my' })
});

// Import Routes
var postRoute = require('./posts');

// Mount Routes
router.use(`${apiPrefix}`, postRoute);

module.exports = router;
