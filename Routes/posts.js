const express = require ('express');
const router = express.Router();

const Post = require('../models/Post'); //Importing PostSchema


//Creating post from Post.js
router.post('/', async (req, res) => { //Async
    const post = new Post( { 
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });

    try{
    const savedPost= await post.save() //Saving to database. Await.
        res.status(200).json(savedPost)
    } catch(error){
        res.status(404).json({message:err})
    }

});

//Get all posts
router.get('/', async (req,res) => {
    try {
        const posts = await Post.find() //Mongoose method. Also possible to add limit for how many posts.
        res.status(200).json(posts);
    }catch(error){
        res.json({ message:err });
    }
});

//Get specific post
router.get('/:postId', async (req,res) => { //Parameter postId
    try{
    const post = await Post.findById(req.params.postId); //finding post by its ID
    res.status(200).json(post);
    }catch(error){
        res.status(404).json({message:err});
    }
});

//Delete post
router.delete('/:postId', async (req,res) => { //Parameter postId
    try{
    const removedPost = Post.remove({_id: req.params.postId}) //Remove post
    res.status(200).json(removedPost);
    }catch(error){
        res.status(404).json({message:err});
    }
});

//Update post
router.patch('/:postId', async (req,res) => { //Parameter postId
    try{
    const updatedPost = Post.updateOne( 
        {_id: req.params.postId},
        {$set: {title: req.body.title}}
        );
    res.status(200).json(updatedPost);
    }catch(error){
        res.status(404).json({message:err});
    }
});

module.exports = router;