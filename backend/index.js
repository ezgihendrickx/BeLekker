require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// DB Connect
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
  console.log('DB connected!')
);

app.get('/', (req, res) => {
  res.send('API operational ✅');
});

// Middelware
app.use(express.json());
// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server Running! (port 3000)'));
