const enroll = {};

const data = require('../../../data/enrollments.json');


enroll.getEnroll = (req, res)=>{
    try {
        res.json(data.enrollments);
    } catch (e) {
        console.log(e)
    }
}


module.exports = enroll;