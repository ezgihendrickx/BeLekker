const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({
    Info: { Status: 'API operational ✅', DataBase: 'DB Connected ✅' },
    routes: {
      home: '/',
      login: '/api/user/login',
      register: '/api/user/register',
      posts: '/api/posts',
    },
  });
});

module.exports = router;
