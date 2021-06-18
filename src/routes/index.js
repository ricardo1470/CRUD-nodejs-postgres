/* init */
const { getinit } = require('../controllers/init');
const { storeFileIntoDB } = require('../controllers/dataUser');
/*users */
const { getusers, getinfo, createuser, getuserbyid, updateuser, deleteuser, deleteallusers } = require('../controllers/users');
/*getdata*/
const{getdata} = require('../controllers/generateData')
/* init */
router.get('/', getinit);

router.get('/data', storeFileIntoDB);

/*users */
router.get('/users', getusers);
router.get('/view', getinfo);
router.get('/update/:id', getuserbyid);
router.post('/users', createuser);
router.post('/update/:id', updateuser);
router.get('/delete/:id', deleteuser);
router.delete('/users', deleteallusers);
router.get('/create', getdata);


module.exports = router;
