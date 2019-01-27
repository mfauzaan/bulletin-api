'use strict'

// Declarations
var express = require('express');
var router = express.Router();

// Variables
const apiVersion = 1
const apiPrefix = `/api/v${apiVersion}`

// Image Upload
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})

var upload = multer({ storage })

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
*/
// Declare Controller
const PostController = require('../controllers').post;

// Resource Routes of Posts
router.get(`${apiPrefix}/posts`, PostController.index);
router.get(`${apiPrefix}/posts/:id`, PostController.show);
router.post(`${apiPrefix}/posts`, upload.single('image'),  PostController.store);
router.put(`${apiPrefix}/posts/:id`, upload.single('image'), PostController.update);
router.delete(`${apiPrefix}/posts/:id`, PostController.destroy);


module.exports = router;
