var mongoose = require('mongoose');
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/brahmendra', {useNewUrlParser: true});
app.use(bodyParser.json());

app.use(function (req, res, next) {

    if (req.url.substr(-1) === '/') {
        res.send("Hieee This Innovapath")
    }
    next();
});

app.use('/v1', require('./routes'));
app.listen(2020);

