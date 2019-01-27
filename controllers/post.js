'use strict';

const Post = require('../models').Post;

// Exports CRUD Operations
module.exports = {

  /**
   * Display a listing of the posts.
   */
  async index(req, res) {
    res.send('Index')
  },


  /**
   * Display the specified post.
   */
  async show(req, res) {
    res.send('Store')
  },


  /**
   * Store a newly created post in DB.
   */
  async store(req, res) {
    res.send('Store')
  },

  /**
   * Update the specified post in DB.
   */
  async update() {
    res.send('Update')
  },

  /**
   * Remove the specified post from DB.
   */
  async destroy() {
    res.send('delete')
  }
};