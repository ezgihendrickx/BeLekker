const Joi = require('joi');

// Registration Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().alphanum().min(3).max(100).required(),
    last_name: Joi.string().alphanum().min(3).max(100).required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,100}$'))
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

  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: true },
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,100}$'))
      .required(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
