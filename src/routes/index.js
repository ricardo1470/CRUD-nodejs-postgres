#!/usr/bin/node
/* define routes */
const { Router } = require('express');
const router = Router();

/* init */
const { getinit } = require('../controllers/init')

/* init */
router.get('/', getinit);


module.exports = router;
