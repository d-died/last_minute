import React from 'react'
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap'

const Post = ({ key, post, posts, upvotes, setUpvotes, deletePost, update, setUpdate }) => {

    return(
        <div>
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
}


export default Post