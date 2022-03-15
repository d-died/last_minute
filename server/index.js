const express = require('express')
const app = express()
// const db = require('./db/connection')
app.set('port', 8000)
const cors = require('cors')
app.use(cors())





////////////////////////
//MIDDLEWARE
////////////////////////
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




////////////////////////
//ROUTES
////////////////////////

/////////INITIAL REDIRECT
app.get('/', (req, res) => {
    res.redirect('/api/posts')
})

app.get('/api', (req,res) => {
    res.json({ message: 'Hi from server!'})
})

////////////////////////
//CONTROLLERS
////////////////////////

const postController = require('./controllers/PostControllers')
app.use('/api/posts', postController)

////////////////////////
//START SERVER
////////////////////////
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(app.get('port'), () => {
    console.log(`STARTED SERVER ON PORT ${ 'port' }`)
})