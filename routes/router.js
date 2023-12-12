const express = require('express');
const router = express.Router();
const menuRouter = require('./menuRouter');

router.use('/menu', menuRouter);

module.exports = router;