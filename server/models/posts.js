const mongoose = require('../db/connection')

const PostSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        upvotes: Number,
    }, 
    {
        timestamps: true
    }

)

const Post = mongoose.model('Post', PostSchema)
module.exports = Post