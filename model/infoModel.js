/*
var user = require('../utils/mongoo-connection');
*/

var mongoose = require('mongoose');
infoSchema = new mongoose.Schema({
    name: String,
    age: String,
    debut: String,
    location:String,
    score: Number
});
var infomodel = mongoose.model('value12345', infoSchema);
function infoModel() {
}

infoModel.prototype.find = function (data, callback) {
    console.log(data);
    infomodel.find({"name": data.name}, function (err, res) {
        if (err) {
            callback(err, null)
        } else {
            if (res.length) {
                if(data.name === res[0].name){
                    callback(null, {"Msg":"This Player Already Registered"})
                }
            }else {
                infomodel.create(data, function (err, res){
                    if(err){
                        callback(err, null)
                    }else {
                        callback(null, res)
                    }
                });
            }
        }

    })
};

infoModel.prototype.getAll = function (data, callback){
   infomodel.find({}, function (err,data) {
       if(err){
           callback(err, null)
       }else {
           callback (null, data)
       }
   })
};
infoModel.prototype.getById = function (id, callback){
    infomodel.find({"_id":id}, function (err,data) {
        if(err){
            callback(err, null)
        }else {
            callback (null, data)
        }
    })
};

infoModel.prototype.update = function (data, callback){
    console.log(data.body,data.params.id);

    infomodel.update({_id: data.params.id}, {$set:data.body}, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
};

infoModel.prototype.delete = function (id, callback){
    infomodel.remove({_id: id}, function (err, data) {
        if(err){
            callback(err, null)
        }else {
            callback(null, data)
        }
    })

}


module.exports = infoModel;