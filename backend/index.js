const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
// Routes
const authRoute = require('./routes/auth');

dotenv.config();

// DB Connect
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
  console.log('DB connected!')
);

app.get('/', (req, res) => {
  res.send('Server running!');
});

// Middelware
app.use(express.json());
// Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Running! (port 3000)'));
