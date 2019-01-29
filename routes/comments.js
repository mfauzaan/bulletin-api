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
// Declare Controller & Validator
const CommentController = require('../app/controllers').comment;
const CommentValidator = require('../app/validators/comment')
const validationResultHandler = require('../app/helpers/validationResultHandler')
const auth = require('../app/middleware/auth')

// Nested Resource Routes for comments
router.get('/posts/:post_id/comments', auth.basic, CommentController.index);
router.get('/posts/:post_id/comments/:id', auth.basic, CommentController.show);
router.post('/posts/:post_id/comments', [CommentValidator.validate('store'), validationResultHandler.validationResultHandler, auth.basic], CommentController.store);
router.put('/posts/:post_id/comments/:id',  [CommentValidator.validate('update'), validationResultHandler.validationResultHandler, auth.basic], CommentController.update);
router.delete('/posts/:post_id/comments/:id', auth.basic, CommentController.destroy);

module.exports = router;
