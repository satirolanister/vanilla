const courseCtrl = {};

const courses = require('../../../data/courses.json');


courseCtrl.getCourse = (req, res)=>{
    try {
        res.json(courses.courses);
    } catch (e) {
        console.error(e);
    }
}





module.exports = courseCtrl;