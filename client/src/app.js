import React, { useState, useEffect } from 'react'
import PostForm from './components/PostForm'
import Header from './components/Header'
import PostList from './components/PostList'
import axios from 'axios'


const App = () => {

    const [ posts, setPosts ] = useState([])
    const [ update, setUpdate ] = useState(false)
    const [ upvotes, setUpvotes ] = useState(0) 

    useEffect(() => {
        getPosts()
    }, [update])

    const getPosts = () => {
        axios.get('http://localhost:8000/api/posts')
        .then(res => setPosts(res.data))

    }


    return(
        <div>
            <Header />
            <a href='/graphs'> Graphs </a>
            <PostForm
                posts={ posts }
                setPosts={ setPosts } 
                update={ update }
                setUpdate={ setUpdate }
            />
            <PostList 
                posts={ posts }
                update={ update }
                setUpdate={ setUpdate }
                upvotes={ upvotes }
                setUpvotes={ setUpvotes }
            />
        </div>
    )
    }


export default App