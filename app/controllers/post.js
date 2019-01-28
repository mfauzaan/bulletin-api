'use strict';

const Post = require('../models').Post;

// Exports CRUD Operations as Post Controller
module.exports = {

  /**
   * Display a listing of the posts.
   */
  async index(request, response) {
    // Query All Posts in the Database
    const posts = await Post.findAll()

    // Send response to the route
    response.send(posts)
  },


  /**
   * Display the specified post.
   */
  async show(request, resposne) {
    // Find required parameter
    const { id } = req.params

    // Query Post using parameter ID
    const post = await Post.findById(id)

    // Send request to Database
    response.send(post)
  },


  /**
   * Store a newly created post in DB.
   */
  async store(request, response) {
    // Get required parametrs
    const { title, content } = req.body

    // perform Create Query
    const post = await Post.create({
      title,
      content,
      image_url: request.file.path,
    })

    response.send(post)
  },

  /**
   * Update the specified post in DB.
   */
  async update(request, response) {
    // Get required Body
    const { title, content } = request.body
    const { id } = request.params 
    // Find Post from Database
    const post = await Post.findById(id)
    
    // Perform Update request
    await post.update({
      title, content, image_url: request.file.path || post.image_url
    })

    // Perform update request
    response.send(post)
  },

  /**
   * Remove the specified post from DB.
   */
  async destroy(request, response) {
    const { id } = req.params

    const post = await Post.findById(id)
    await post.destroy()

    response.send(post)
  }
};