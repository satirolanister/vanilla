const {Router} = require('express');
const {getuser} = require('../../controller/users/usersCtrl.js');

const router = Router();

router.get('/users', getuser);


module.exports = router;