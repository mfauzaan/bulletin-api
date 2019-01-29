const { body } = require('express-validator/check')

exports.validate = (method) => {

  switch (method) {
    case 'store': {
      return [
        body('title', 'title Field is required').exists(),
        body('content', 'Content Field is required').exists()
      ]
    }

    case 'update': {
      return [
        body('title', 'title Field is required').exists(),
        body('content', 'Content Field is required').exists(),
      ]
    }
  }
}