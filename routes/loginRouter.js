var express = require ('express'),
    router = express.Router(),
    SignupController= require ('../Controller/loginController.js'),
    sc = new SignupController();


router.post('/', sc.create.bind(sc));

module.exports = router;
