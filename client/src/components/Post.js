import React from 'react'
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap'

const Post = ({ post, upvote, deletePost }) => {

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
                { post.upvotes } Upvotes
                <Button onClick={ () => { upvote(post) }}>
                    Upvote
                </Button>
                </CardSubtitle>
                <CardText>
                { post.description }
                </CardText>
                <Button onClick={ () => { deletePost(post) } }>
                    Delete
                </Button>
                
            </Card>             
        </div>
    )
}


export default Post