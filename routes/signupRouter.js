var express = require('express'),
    router = express.Router();
SignupController = require('../controller/signupController.js');
sc = new SignupController();


router.post('/', sc.post.bind(sc));
router.get('/getAll', sc.getAll.bind(sc));
router.get('/getById/:id', sc.getById.bind(sc));
router.get('/getByName/:Name', sc.getByName.bind(sc));
router.get('/getByEmail/:Email', sc.getByEmail.bind(sc));
router.put('/update/:id', sc.Update.bind(sc));
router.delete('/delete/:id', sc.Delete.bind(sc));

/*router.post('/',function (req,res) {
res.send("murali krishna")
});*/

module.exports = router;
