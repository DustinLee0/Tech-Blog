const router = require('express').Router();
const homeRoute = require('./homepage');
const dashboardRoute = require('./dashboard');
const loginRoute = require('./login');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/login', loginRoute);
// router.use('/api', apiRoutes);

module.exports = router;
