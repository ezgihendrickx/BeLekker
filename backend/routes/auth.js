const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const { registerValidation, loginValidation } = require('./validation');

//---------------------//
// REGISTER Controller //
//---------------------//
router.post('/register', async (req, res) => {
  // Validate User Input
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user exists in DB
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist)
    return res.status(400).send(`User already exists for ${req.body.email}`);

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // If no error save info to database
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: hashPassword,
    dob: req.body.dob,
    email: req.body.email,
  });
  try {
    const savedUser = await user.save();
    res.send(`New user created for ${req.body.email}`);
  } catch (err) {
    res.status(400).send(error);
  }
});

//------------------//
// LOGIN Controller //
//------------------//
router.post('/login', async (req, res) => {
  // Validate User Credentials
  const { error } = loginValidation(req.body);
  if (error) return res.send(error.details[0].message);

  // Check if user exists in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("User doesn't exist");

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.send('Incorrect email or password');

  // Create & assign JWToken
  const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send({
    message: 'Login successfully',
    token: token,
  });
});

module.exports = router;
