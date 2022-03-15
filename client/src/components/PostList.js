import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap'


const PostList = ({ posts, setPosts }) => {

   console.log(posts)

//    const vote = ( e, index ) => {
//     //    let cheer = upvote
//     //    console.log(e.target._id)
//     //    console.log(id)
//        if (index === posts._id){
//          posts.upvotes += 1
//          console.log(posts)
//        }
       
//     //    axios
//     //     .post(`http://localhost:8000/posts/${ id }`)
//    }

    return(

        <div className='postcard'>
            { posts.map((post, id) => {
                return(
                    <div key={ id }>
                    <Card
                        body
                        color="success"
                        inverse
                    >
                        <CardTitle tag="h5">
                        { post.title }
                        </CardTitle>
                        <CardSubtitle>
                            {/* { upvote } upvotes  */}
                        { post.upvotes } Upvotes
                        <Button>
                            Upvote
                        </Button>
                        </CardSubtitle>
                        <CardText>
                        { post.description }
                        </CardText>
                        <Button>
                            Delete
                        </Button>
                        
                    </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList