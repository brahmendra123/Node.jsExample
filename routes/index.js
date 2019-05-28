var express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
    res.send(" Innovapath version one");
    next();
});

router.use('/signup', require('./signupRouter'));
router.use('/login', require('./loginRoute'));
router.use('/playerinfo', require('./infoRouter'));


module.exports = router;
