var express = require('express'),
    router = express.Router();
LoginController = require('../controller/loginController');
lc = new LoginController();

router.post('/', lc.create.bind(lc));

/* router.post('/',function (req,res){
 res.send("This Login Prosses")
});*/

module.exports = router;