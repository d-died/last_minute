import React from 'react'
import axios from 'axios'
import Post from './Post'


const PostList = ({ update, upvotes, setUpvotes, setUpdate, posts }) => {



   const deletePost = (post) => {
       const url = `http://localhost:8000/api/posts/${ post._id }`
       console.log(url)
       axios.delete(url)
       .then(() => setUpdate(!update))
       .catch(err => console.error(err))

   } 



   const upvote = (post) => {
    const url = `http://localhost:8000/api/posts/${ post._id }`
    posts.forEach(item => {
        if (item._id === post._id) {
            const vote = item.upvotes += 1
            console.log(vote)
            axios.put(url, { upvotes: vote })
                .then(() => setUpdate(!update))
                .catch(err => console.error(err))
        }
    })
    
}


    return(

        <div>
            { posts.map((post, index) => {
                return(
                    <div className='postcard'>
                        <Post
                            key={ index }
                            id={ post._id }
                            post={ post }
                            upvote={ upvote }
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