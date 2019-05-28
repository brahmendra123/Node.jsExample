var model = require ('../model/infoModel'),
    im = new model();

function infoController() {
    
};

infoController.prototype.post = function (req, res) {
    if (Object.keys(req.body).length) {
        if (!req.body.name) {
            res.status(404).send({"Msg": "Pls Enter The Name"})
        } else if (!req.body.age) {
            res.status(404).send({"Msg": "Pls Enter The age"})
        } else if (req.body.score && req.body.score.length ) {
            im.find(req.body, function (err, data) {
                if (err) {
                    res.send(error);
                }
                res.status(200).send(data)
            })

        } else {
            res.status(404).send({"Msg": "Pls Give Minimum Score"})
        }
    } else {
        res.status(401).send({"Msg": "Pls Add Requried Fields"});
    }
};

infoController.prototype.getAll = function (req, res) {
    im.getAll(req, function (err,data) {
        res.send(data);
    })
};

infoController.prototype.getById = function (req, res) {
    im.getById(req.params.id, function (err,data) {
        res.send(data);
    })
};

infoController.prototype.update = function (req, res){
    im.update(req, function (err,data) {
        res.send(data);
    })
};

infoController.prototype.delete = function (req, res){
    console.log(req.params.id);
    im.delete(req.params.id, function (err,data) {
        res.send(data);
    })
};

module.exports = infoController;
