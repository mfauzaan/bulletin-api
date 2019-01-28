const { body } = require('express-validator/check')

exports.validate = (method) => {

  switch (method) {
    case 'store': {
      return [
        body('content', 'Content Field is required').exists(),
      ]
    }

    case 'update': {
      return [
        body('content', 'Content Field is required').exists(),
      ]
    }
  }
}