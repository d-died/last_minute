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
    }, [])

    const getPosts = () => {
        axios.get('http://localhost:8000/api/posts')
        // .then( res => console.log(res, res.data) )
        .then(res => setPosts(res.data))

    }

    const updatePage = () => { setUpdate(!update) }

    console.log(posts)

    return(
        <div>
            <Header />
            <PostForm 
                updatePage={ updatePage }
                update={ update }
                setUpdate={ setUpdate }
            />
            <PostList 
                posts={ posts }
                setPosts={ setPosts }
                updatePage={ updatePage }
                update={ update }
                setUpdate={ setUpdate }
            />
        </div>

    )

    }


export default App