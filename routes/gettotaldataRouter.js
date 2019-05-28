var express = require('express'),
    router = express.Router();

gettotaldataControler = require('../controller/gettotaldataController');
gm = new gettotaldataControler();

router.get('/', gm.getAll.bind(gm));

/*router.get('/',function(req,res){
        res.send("Iam Getting total data")
    });*/

module.exports = router;