const db = require("../models");
const User = db.user;

returnHistoryUser = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        if(user) {
            req.history = user.history;
            console.log("Lay du lieu cua user");
            console.log(req.history);
        } else {
            req.history = '0';
            console.log(" Khong lay du lieu cua user");
        }
        next();
    });

}
module.exports = returnHistoryUser;