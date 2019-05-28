var express = require('express'),
    router = express.Router();
InfoController = require('../controller/infoController');
ic = new InfoController();

router.post('/', ic.post.bind(ic));
router.get('/getAll', ic.getAll.bind(ic));
router.get('/getById/:id', ic.getById.bind(ic));
router.put('/update/:id', ic.update.bind(ic));
router.delete('/delete/:id', ic.delete.bind(ic));


module.exports = router;