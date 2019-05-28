var model = require('../model/loginModel');

lm = new model();

function LoginController() {

}

LoginController.prototype.create = function (req, res) {
    if (Object.keys(req.body).length) {
        if (!req.body.email) {
            console.log("data", req.body.email);
            res.send({"msg": "Pls Enter Email Id"})
        } else if (!req.body.password) {
            res.send({"msg": "pls Enter Password"})
        } else {
            lm.create(req.body, function (err, data) {
                if (err) {
                    res.send(err);
                } else if (data.status) {
                    res.status(data.status).send({"Msg": data.Msg});
                } else {
                    res.send(data);
                }

            });
        }


    } else {
        res.send({"msg": "Pls Enter email and password"})
    }
};
module.exports = LoginController;