#!/usr/bin/node
/* define routes */
const { Router } = require('express');
const router = Router();

/* init */
const { getinit } = require('../controllers/init')
const { storeFileIntoDB } = require('../controllers/dataUser');
/*users */
const { getusers, createuser, getuserbyid, updateuser, deleteuser, deleteallusers } = require('../controllers/users');

/* init */
router.get('/', getinit);

router.get('/data', storeFileIntoDB);

/*users */
router.get('/users', getusers);
router.get('/users/:id', getuserbyid);
router.post('/users', createuser);
router.put('/users/:id', updateuser);
router.delete('/users/:id', deleteuser);
router.delete('/users', deleteallusers);


module.exports = router;
