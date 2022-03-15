import React from "react";
import axios from 'axios'
import { Button } from 'reactstrap'


const Upvotes = ({ post, setUpvotes, upvotes, posts, setUpdate, update }) => {

    console.log(posts)

   const increment = () => {
    setUpvotes(upvotes += 1)
}

    const upvote = (post) => {
        // if(post._id === posts.id ){
            increment()
        // }
        const url = `http://localhost:8000/api/posts/${ post._id }`
        console.log(url)
        console.log(upvotes)
        axios.put(url, { upvotes: upvotes })
        .then(() => setUpdate(!update))
        .catch(err => console.error(err))
    }


    return(
        <div>
             {/* { post.upvotes } Upvotes */}
                <Button onClick={ () => { upvote(post) }}>
                    Upvote
                </Button>
        </div>
    )
}

export default Upvotes