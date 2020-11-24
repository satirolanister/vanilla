const {Router} = require('express');
const {getCourse} = require('../../controller/courses/coursesCtrl.js');

const router = Router();

router.get('/courses',getCourse);

module.exports = router;