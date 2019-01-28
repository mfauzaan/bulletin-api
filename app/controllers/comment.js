'use strict';

const Comment = require('../models').Comment;
const Post = require('../models').Post;

// Exports CRUD Operations as Comment Controller
module.exports = {

  /**
   * Display a listing of the comments.
   */
  async index(req, res) {
    // Query Post using Provided ID
    // with related Comments
    const post = await Post.findOne({
      where: { id: req.params.post_id },
      include: [{ model: Comment }]
    })

    // Send response to the route
    res.send(post)
  },


  /**
   * Display the specified Comment.
   */
  async show(req, res) {
    // Find required parameter
    const { id } = req.params

    // Query Comment using provided ID
    const comment = await Comment.findById(id)

    // Return response
    res.send(comment)
  },


  /**
   * Store a newly created Comment in DB.
   */
  async store(req, res) {
    // Get required parametrs
    const { content } = req.body
    const { post_id } = req.params

    // perform Create Query
    const comment = await Comment.create({
      content,
      post_id
    })

    // Return response
    res.send(comment)
  },

  /**
   * Update the specified Comment in DB.
   */
  async update(req, res) {
    // Get required Body
    const { content } = req.body
    const { id } = req.params

    // Find Post from Database
    const comment = await Comment.findById(id)

    // Perform Update request
    await comment.update({
      content
    })

    // Perform update request
    res.send(comment)
  },

  /**
   * Remove the specified Comment from DB.
   */
  async destroy(req, res) {
    // Get Required parameters
    const { id } = req.params

    // Query post using provided id
    const comment = await Comment.findById(id)

    if (!comment) {
      return res.send({ title: 'Delete Failed', message: 'Selected comment cannot found' })
    }
    // Delete post
    await comment.destroy()

    // return response
    res.send(comment)
  }
};