var Model = require('../model/signupmodel.js'),
    sm = new Model();

function SignUpController() {

}

SignUpController.prototype.post = function (req, res) {
    //console.log(req.body);
    if (Object.keys(req.body).length) {
        if (!req.body.name) {
            res.status(404).send({"Msg": "Pls Enter The Name"})
        } else if (!req.body.email) {
            res.status(404).send({"Msg": "Pls Enter The Email"})
        } else if (req.body.password && req.body.password.length > 6) {
            sm.find(req.body, function (err, data) {
                if (err) {
                    res.send(error);
                }
                res.status(200).send(data)
            })

        } else {
            res.status(404).send({"Msg": "Pls Give Valid Pasword Greterthen Six"})
        }
    } else {
        res.status(401).send({"Msg": "Pls Add Requried Fields"});
    }
};

SignUpController.prototype.getAll = function (req, res) {
    sm.getAll(req, function (err, data) {
        res.send(data);
    });
};

SignUpController.prototype.getById = function (req, res) {
    console.log(req);
    sm.getById(req, function (err, data) {
        res.send(data)
    })
};

SignUpController.prototype.getByName = function (req, res) {
    sm.getByName(req, function (err, data) {
        res.send(data);
    })
};

SignUpController.prototype.getByEmail = function (req, res) {
    sm.getByEmail(req, function (err, data) {
        res.send(data);
    })
};

SignUpController.prototype.Update = function (req, res) {
    sm.Update(req, function (err, data) {
        res.send(data);
    })
};

SignUpController.prototype.Delete = function (req, res) {
    sm.Delete(req, function (err, data) {
        res.send(data);
    })
};

module.exports = SignUpController;
