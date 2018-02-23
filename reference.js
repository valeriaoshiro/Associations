var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo2');

// USER - email, name
// POST - title, content

var Post = require('./models/post');
var User = require('./models/user');


// var newUser = new User({
//     email: 'hermione@howards.edu',
//     name: 'Hermione Granger'
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });
// var newPost = new Post({
//     title: 'Reflections on Apples',
//     content: 'They are delicious'
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });
// //another way of creating a post
// Post.create({
//     title: "Blog 2",
//     content: "This is the test blog"
// }, function(err, post){
//     User.findOne({email: "hermione@howards.edu"}, function(err, foundUser){
//         if(err){
//             console.log(err)
//         } else {
//             foundUser.posts.push(post._id);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

//find user
//find all posts for that user

User.findOne({email: 'hermione@howards.edu'}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

