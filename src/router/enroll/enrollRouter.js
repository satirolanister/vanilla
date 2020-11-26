const {Router} = require('express');
const {getEnroll} = require('../../controller/enroll/enrollmentsCtrl.js');

const router = Router();

router.get('/enroll', getEnroll);


module.exports = router;