module.exports = function () {
    var express = require('express');
    var swig  = require('swig');
    var Post = require('../models/post.model')
    var app = express();

    app.get('/', function (req, res) {
        Post.find({}, function(err, posts){
            res.write(swig.renderFile('templates/posts.html',{
                title: 'WebPanda - Blog',
                posts: posts
            }));
            res.end();
        });
    });

    app.get('/new',function(req, res){
        res.write(swig.renderFile('templates/newPost.html',{
            title: 'WebPanda - New Post'
        }));
        res.end();
    });

    app.get('/:id',function(req, res){
        Post.findById(req.params["id"], function(err, post){
            res.write(swig.renderFile('templates/post.html',{
                title: 'WebPanda - Post',
                post: post
            }));
            res.end();
        });

    });


    app.post('/savePost', function(req, res){
        var d = new Date();

        var title = req.body.title || "",
            text = req.body.text || "",
            date = d.getDate() + "." + (d.getMonth() + 1) +"."+ d.getFullYear(),
            img = req.body.img || "";
        var post = new Post({
            title: title,
            text: text,
            date: date,
            img: img,
            time: d.getTime()
        });
        post.save(function (err) {
            if (err)
                console.log('/savePost - error save post (blog.route)');
        });
        res.end();
    });



    return app;
}();
