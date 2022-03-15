import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap'
import Post from './Post'


const PostList = ({ updatePage, update, setUpdate, posts, setPosts }) => {

   console.log(posts)

   const [ upvotes, setUpvotes ] = useState(0)

   const deletePost = (post) => {
       const url = `http://localhost:8000/api/posts/${ posts._id }`
       console.log(url)
    //    axios.get(``, posts._id)
    //    .then(res => console.log(res))
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
            { posts.map((post, index) => {
                return(
                    <div>
                        <Post
                            key={ post._id }
                            id={ post._id }
                            post={ post }
                            posts={ posts } 
                            upvotes={ upvotes }
                            setUpvotes={ setUpvotes }
                            deletePost={ deletePost }
                            update={ update }
                            setUpdate={ setUpdate }
                            index={ index }/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList