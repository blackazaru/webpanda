var mongoose = require('mongoose');
var Post = mongoose.model('Post', {
    title: String,
    text: String,
    date: String,
    img: String,
    time: String
});

module.exports = Post;
