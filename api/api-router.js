const router = require('express').Router();

const restricted = require('../auth/restricted-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/user-router.js');

router.use('/restricted', restricted);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's working! It's working!" });
});

module.exports = router;
