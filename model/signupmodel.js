var user = require('../utils/mongoo-connection');
/*var value;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loginSchema = new Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String}
});
var loginSchemaModel = mongoose.model('value', loginSchema);*/



function SignupModule() {

}

SignupModule.prototype.find = function (data, callback) {
    console.log(data);
    var self = this;
    user.find({"email": data.email}, function (err, res) {
        if (err) {
            callback(err, null)
        } else {
            if (res.length) {
                if (data.email === res[0].email) {
                    callback(null, {"Msg": "This Email is Already Exit"})
                }

            } else {
                user.create(data, function (err, res) {
                    if (err) {
                        callback(err, null)
                    } else {
                        callback(null, {"Msg": "Successfully Signup Welcome Our Site"})
                    }
                });
            }
        }

    })
};

SignupModule.prototype.getAll = function (data, callback) {
    user.find({}, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, {data})
        }
    });
};

SignupModule.prototype.getById = function (data, callback) {
    user.find({_id: data.params.id}, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, {data})
        }
    })
};

SignupModule.prototype.getByName = function (data, callback) {
    user.find({name: data.params.Name}, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
};

SignupModule.prototype.getByEmail = function (data, callback) {
    user.find({email: data.params.Email}, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
};

SignupModule.prototype.Update = function (data, callback) {
    user.update({_id: data.params.id}, data.body, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
};

SignupModule.prototype.Delete = function (data, callback) {
    user.remove({_id: data.params.id}, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
};

module.exports = SignupModule;
