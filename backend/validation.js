const Joi = require('joi');

// User input validation schema
const schema = Joi.object({
  first_name: Joi.string().alphanum().min(3).max(100).required(),
  last_name: Joi.string().alphanum().min(3).max(100).required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,1024}$'))
    .required(),
  repeat_password: Joi.ref('password'),
  dob: Joi.date().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: true },
    })
    .required(),
})
  .with('first_name', 'last_name')
  .with('password', 'repeat_password');

module.exports = schema;
