const router = require('express').Router();
const User = require('../model/User');

// ROUTE
router.post('/register', async (req, res) => {
  // Validate User Input
  const { error } = await schema.validate({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    password: req.body.password,
    repeat_password: req.body.repeat_password,
    email: req.body.email,
  });

  // If error show error to user
  if (error) return res.status(400).send(error.details[0].message);

  // If no error save info to database
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    dob: req.body.dob,
    email: req.body.email,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(error);
  }
});

module.exports = router;
