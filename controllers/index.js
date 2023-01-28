const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoute = require('./homepage');

router.use('/', homeRoute);
// router.use('/api', apiRoutes);

module.exports = router;
