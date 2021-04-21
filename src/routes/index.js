#!/usr/bin/node
/* define routes */
const { Router } = require('express');
const router = Router();

/* init */
const { getinit } = require('../controllers/init')
/* user data */
const { storeFileIntoDB } = require('../controllers/user');

/* init */
router.get('/', getinit);
/* data */
router.get('/data', storeFileIntoDB);


module.exports = router;
