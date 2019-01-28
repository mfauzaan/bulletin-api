const { validationResult } = require('express-validator/check');

exports.validationResultHandler = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (e) {
    res.status(422).json({ errors: e.mapped() });
  }
};