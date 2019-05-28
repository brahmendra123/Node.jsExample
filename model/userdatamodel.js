
var userdatamodule = require('../utils/mongoo-connection');



function userdatamodule() {
}


userdatamodule.prototype.create = function (data, callback) {
    userdatamodule.find({"email": data.email}, function (err, res) {
        if (err) {
            callback(err, null)
        }  else if(res.length) {
            if (data.password === res[0].password) {
                callback(null, {message: "successfully Login"})
            } else{
                callback(null, {message: "pls give valid password"})
            }
        } else {
            userdatamodule.create(data, function (err, data) {
                if(err){
                    callback(err,null)
                }else{
                    callback(null, data)
                }
            });
        }

    })
};
userdatamodule.prototype.getById  = function (id, callback) {
    console.log(id);
    userdatamodule.find({"_id":id}, function (err, res) {
        console.log(res);
        if (err) {
            callback(err, null)
        }  else {
            callback(null, res)
        }

    })
};
module.exports = userdatamodule;



