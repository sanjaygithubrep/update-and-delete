const Post = require('../models/post');
module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 20);
    // return res.render('home', {
    //     title: "Home"
    // });
    Post.find({}).populate('user').populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
        .exec(function(err,posts){
            console.log(posts);
        return res.render('home',{
            
            title:"Database|Home",
            posts:posts
        })
    })
}

// module.exports.actionName = function(req, res){}