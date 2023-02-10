const router = require('express').Router();
const homeRoute = require('./homepage');
const dashboardRoute = require('./dashboard');
const userRoutes = require('./login');

router.use('/user', userRoutes);
router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);

module.exports = router;
