const usersCtrl = {};
const user = require('../../../data/users.json');


usersCtrl.getuser = (req, res) =>{
    try {
        res.json(user.users);
    } catch (e) {
        console.error(e);
    }
}


module.exports = usersCtrl;