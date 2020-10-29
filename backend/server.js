require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const indexRoute = require('./routes/index');
const registerRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// DB Connect
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
  console.log('DB connected!')
);

// Routes
app.use(express.json(), cors());
app.use('/', indexRoute);
app.use('/api/user', registerRoute);
app.use('/api/posts', postRoute);

// Initiate Server
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server Running! (port ${process.env.PORT})`)
);
