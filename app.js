var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var marked = require('marked');
var upload = require('jquery-file-upload-middleware');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/webpanda');
app.use(express.static(__dirname + '/assets'));

app.use('/', require('./routes/main.route'));
app.use('/blog', require('./routes/blog.route'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server started at http://%s:%s', host, port)
});