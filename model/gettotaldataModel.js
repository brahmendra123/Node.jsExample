var User = require('../utils/mongoo-connection');

function GettotaldataModel() {

}

GettotaldataModel.prototype.range = function (req, callback) {
    User.find({}, function (err, data) {
        console.log(data);
        callback(null, data)
    });

};
module.exports = GettotaldataModel;

