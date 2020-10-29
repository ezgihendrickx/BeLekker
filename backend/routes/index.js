const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('API operational ✅');
});

module.exports = router;
