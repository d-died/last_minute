import React from 'react'
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router,
    Routes, 
    Route
 } from 'react-router-dom'
import App from './app'
import BarChart from './components/BarChart'



ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App /> } />
            <Route path='/graphs' element={ <BarChart /> } />
        </Routes>
    </Router>,
    document.getElementById('root')
)