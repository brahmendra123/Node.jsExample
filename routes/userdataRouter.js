var express = require ('express'),
    router = express.Router(),
    userdataController= require ('../Controller/userdatacontroller.js'),
    sc = new userdataController();


router.post('/', sc.create.bind(sc));
router.get('/:id', sc.getById.bind(sc));

module.exports = router;
