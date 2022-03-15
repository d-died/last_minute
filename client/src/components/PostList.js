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
import Upvotes from '../components/Upvotes'


const PostList = ({ updatePage, update, upvotes, setUpvotes, setUpdate, posts, setPosts }) => {

   console.log(posts)


   const deletePost = (post) => {
       const url = `http://localhost:8000/api/posts/${ post._id }`
       console.log(url)
       axios.delete(url)
       .then(() => setUpdate(!update))
       .catch(err => console.error(err))

   } 

   const increment = () => {
       setUpvotes(upvotes += 1)
   }

   const upvote = (post) => {
    const url = `http://localhost:8000/api/posts/${ post._id }`
    posts.forEach( item => {
        if (item._id === post._id) {
            const vote = item.upvotes += 1
            console.log(vote)
            axios.put(url, { upvotes: vote })
                .then(() => setUpdate(!update))
                .catch(err => console.error(err))
        }
    })
    
    // console.log(posts)
    // console.log(post._id)
    // console.log(upvotes)
    
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
                            upvote={ upvote }
                            upvotes={ upvotes }
                            setUpvotes={ setUpvotes }
                            deletePost={ deletePost }
                            update={ update }
                            setUpdate={ setUpdate }
                            index={ index }/>
                        {/* <Upvotes 
                            // upvote={ upvote }
                            setUpdate={ setUpdate }
                            update={ update }
                            upvotes={ upvotes }/> */}
                    </div>
                )
            })}
        </div>
    )
}

export default PostList