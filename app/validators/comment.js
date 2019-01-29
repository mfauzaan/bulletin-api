const { body } = require('express-validator/check')

exports.validate = (method) => {

  switch (method) {
    case 'store': {
      return [
        body('content', 'This action requires the field to be specified').exists(),
      ]
    }

    case 'update': {
      return [
        body('content', 'This action requires the field to be specified').exists(),
      ]
    }
  }
}