var modelData = require('../model/gettotaldataModel');

gm = new modelData();

function gettotaldataController() {

}

gettotaldataController.prototype.getAll = function (req, res) {
    gm.range(req, function (err, data) {
        res.send(data);
    })
};


module.exports = gettotaldataController;