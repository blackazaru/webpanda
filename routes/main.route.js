module.exports = function () {
    var express = require('express');
    var swig = require('swig');
    var Post = require('../models/post.model');
    var app = express();

    app.get('/', function (req, res) {
        Post.find({}).sort({'time': -1})
            .limit(5).exec(function (err, posts) {
                res.write(swig.renderFile('templates/main.html', {
                    title: 'WebPanda - Blog',
                    posts: posts
                }));
                res.end();
            });
    });
    return app;
}();
