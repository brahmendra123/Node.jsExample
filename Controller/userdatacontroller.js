var Model = require ('../model/userdatamodel.js'),
    sm;

function userdataController(){
    sm= new Model();
}

userdataController.prototype.create = function(req,res){
    sm.create(req.params.id,function (err,data) {
        console.log(data);
        if(err){
            res.send(err);
        } else {
            res.send(data);
        }
    })
};
userdataController.prototype.getById  = function(req,res){
    sm.getById(req.params.id,function (err,data) {
        console.log(data);
        if(err){
            res.send(err);
        } else {
            res.send(data);
        }
    })
};
module.exports= userdataController;
