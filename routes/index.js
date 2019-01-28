'use strict'

const express = require('express');
const router = express.Router();

// Configuration
const apiVersion = 1
const apiPrefix = `/api/v${apiVersion}`

// Import Middlewares
const auth = require('../app/middleware/auth');

// Import Routes
var postRoute = require('./posts');
var commentRoute = require('./comments');

/* Home Route */
router.get('/', function(req, res) {
  // Send details of the Appilcation to Homescreen
  res.send({ application: 'Bulletin API', version: 1, owner: 'https://socar.my' })
});

// Mount Routes
router.use(`${apiPrefix}`, postRoute);
router.use(`${apiPrefix}`, commentRoute);

module.exports = router;