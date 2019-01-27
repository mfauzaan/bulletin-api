var express = require('express');
var router = express.Router();
const apiVersion = 1
const apiPrefix = `/api/v${apiVersion}`


// Declare Controller
const PostController = require('../controllers').post;

/* Home Route */
router.get('/', function(req, res) {
  // Send details of the Appilcation to Homescreen
  res.send({ application: 'Bulletin API', version: apiVersion, owner: 'https://socar.my' })
});

// Resource Routes of Posts
router.get(`${apiPrefix}/posts`, PostController.index);
router.post(`${apiPrefix}/posts`, PostController.store);
router.put(`${apiPrefix}/posts`, PostController.update);
router.delete(`${apiPrefix}/posts`, PostController.destroy);

module.exports = router;
