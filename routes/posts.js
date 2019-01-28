'use strict'

// Declarations
var express = require('express');
var router = express.Router();

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
const PostController = require('../app/controllers').post;

// Resource Routes of Posts
router.get('/posts', PostController.index);
router.get('/posts/:id', PostController.show);
router.post('/posts', upload.single('image'),  PostController.store);
router.put('/posts/:id', upload.single('image'), PostController.update);
router.delete('/posts/:id', PostController.destroy);

module.exports = router;
