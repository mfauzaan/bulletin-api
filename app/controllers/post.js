'use strict';

const Post = require('../models').Post;

// Exports CRUD Operations as Post Controller
module.exports = {

  /**
   * Display a listing of the posts.
   */
  async index(req, res) {
    // Query All Posts in the Database
    const posts = await Post.findAll()

    // Send response to the route
    res.send(posts)
  },


  /**
   * Display the specified post.
   */
  async show(req, res) {
    // Find required parameter
    const { id } = req.params

    // Query Post using parameter ID
    const post = await Post.findById(id)

    // Send request to Database
    res.send(post)
  },


  /**
   * Store a newly created post in DB.
   */
  async store(req, res) {
    // Get required parametrs
    const { title, content } = req.body

    // perform Create Query
    const post = await Post.create({
      title,
      content,
      image_url: req.file.path,
    })

    res.send(post)
  },

  /**
   * Update the specified post in DB.
   */
  async update(req, res) {
    // Get required Body
    const { title, content } = req.body
    const { id } = req.params 
    // Find Post from Database
    const post = await Post.findById(id)
    
    // Perform Update request
    await post.update({
      title, content, image_url: req.file.path || post.image_url
    })

    // Perform update request
    res.send(post)
  },

  /**
   * Remove the specified post from DB.
   */
  async destroy(req, res) {
    const { id } = req.params

    const post = await Post.findById(id)
    await post.destroy()

    res.send(post)
  }
};