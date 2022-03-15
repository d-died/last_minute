const express = require('express')
const router = express.Router()
const Post = require('../models/posts')


// GET ALL POSTS

router.get('/', async (req, res, next ) => {
    try{
        const posts = await Post.find({})
        res.json(posts)
    } catch(err) {
        next(err)
    }
})


// GET POSTS BY ID

router.get('/:id', async (req, res, next) => {
    console.log(req)
    try{
        const singlePost = await Post.findById(req.params.id)
        if (singlePost) {
            res.json(singlePost)
        }
    } catch(err) {
        next(err)
    }
})


// CREATE NEW POST

router.post('/', async (req, res, next) => {
    try{
        const newPost = await Post.create(req.body)
        res.status(201).json(newPost)
    } catch(err) {
        next(err)
    }
})

// DELETE POST

router.delete('/:id', async( req, res, next ) => {
    try{
        const deletePost = await Post.findByIdAndDelete(req.params.id)
        if (deletePost) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

//UPDATE POST 
router.put('/:id', async ( req, res, next ) => {
    try{
        const upvoteUpdate = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(upvoteUpdate) {
            res.json(upvoteUpdate)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})



module.exports = router