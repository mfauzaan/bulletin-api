'use strict';

const Comment = require('../models').Comment;
const Post = require('../models').Post;

// Exports Comment Controller
module.exports = {

  /**
   * Display a listing of the comments.
   */
  async index(req, res) {
    try {
      // Query Post using Provided ID
      // with related Comments
      const post = await Post.findOne({
        where: { id: req.params.post_id },
        include: [{ model: Comment }]
      })

      // Send response to the route
      res.send(post.Comments)
    } catch (error) {
      // Send response to the route
      res.status(500).json({
        errors:
        {
          "code": "QUERY_FAILED",
          "message": "Failed to find the post",
        }
      })
    }

  },


  /**
   * Display the specified Comment.
   */
  async show(req, res) {
    try {
      // Find required parameter
      const { id } = req.params

      // Query Comment using provided ID
      const comment = await Comment.findByPk(id)

      // Return response
      res.send(comment)
    } catch (error) {
      // Send response to the route
      res.status(500).json({
        errors:
        {
          "code": "QUERY_FAILED",
          "message": "Failed to find the post",
        }
      })
    }

  },


  /**
   * Store a newly created Comment in DB.
   */
  async store(req, res) {
    try {
      // Get required parametrs
      const { content } = req.body
      const { post_id } = req.params

      // perform Create Query
      const comment = await Comment.create({
        user_id: req.auth.id,
        content,
        post_id
      })

      // Return response
      res.status(200).json({ message: 'Comment has been added successfully', data: comment });
    } catch (error) {
      res.status(500).json({
        errors:
        {
          "code": "QUERY_FAILED",
          "message": "Failed to find the post",
        }
      })
    }

  },

  /**
   * Update the specified Comment in DB.
   */
  async update(req, res) {
    try {
      // Get required Body
      const { content } = req.body
      const { id } = req.params

      // Find Post from Database
      const comment = await Comment.findByPk(id)

      // Perform Update request
      await comment.update({
        content
      })

      // Perform update request
      res.status(200).json({ message: 'Comment has been updated successfully', data: comment });
    } catch (error) {
      // Send response to the route
      res.status(500).json({
        errors:
        {
          "code": "QUERY_FAILED",
          "message": "Failed to find the post",
        }
      })
    }

  },

  /**
   * Remove the specified Comment from DB.
   */
  async destroy(req, res) {
    try {
      // Get Required parameters
      const { id } = req.params

      // Query post using provided id
      const comment = await Comment.findByPk(id)

      // Delete post
      await comment.destroy()

      // return response
      res.status(200).json({ message: 'Comment has been deleted successfully', data: comment });
    } catch (error) {
      res.status(500).json({
        errors:
        {
          "code": "DELETION_FAILED",
          "message": "The comment could not be deleted",
        }
      })
    }
  }
};