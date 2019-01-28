'use strict'

// Declarations
var express = require('express');
var router = express.Router();

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
const CommentController = require('../app/controllers').comment;

// Nested Resource Routes for comments
router.get('/posts/:post_id/comments', CommentController.index);
router.get('/posts/:post_id/comments/:id', CommentController.show);
router.post('/posts/:post_id/comments',  CommentController.store);
router.put('/posts/:post_id/comments/:id', CommentController.update);
router.delete('/posts/:post_id/comments/:id', CommentController.destroy);

module.exports = router;