var loginmodule = require('../utils/mongoo-connection');

function loginmodule() {
}
loginmodule.prototype.find = function (data, callback) {
    loginmodule.find({"email": data.email}, function (err, res) {
        if (err) {
            callback(err, null)
        }  else if(res.length) {
            console.log(res[0].password);
                if (data.password === res[0].password) {
                    callback(null, {message: "successfully Login"})
                } else {
                    callback(null, {status: 404, message: "pls give valid PASSWORD"})
                }
        } else {
            callback(null, {status: 404,message: "pls give valid EMAIL"})
        }


    })


    //callback(null, {"Msg": "Welcome To Our Site",data});

};
module.exports = loginmodule;



