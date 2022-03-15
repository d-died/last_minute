import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap'


const PostList = ({ updatePage, update, setUpdate, posts, setPosts }) => {

   console.log(posts)

   const [ upvotes, setUpvotes ] = useState(0)

   const deletePost = (id) => {
    //    console.log(posts._id)
       axios.get(`http://localhost:8000/api/posts/${ posts._id }`, posts._id)
       .then(res => console.log(res))
    //    .catch(err => console.error(err))
   } 


//    const vote = ( postID ) => {
    
//     posts.forEach((post) => {
//         if(post._id === postID){
//             setUpvotes( upvotes + 1 )
//             console.log(upvotes)
//             // axios
//             //     .post('http://localhost:8000/api/posts', { upvotes: upvotes })
//         }
//     })
       
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
                        <Button onClick={ () => { deletePost() } }>
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