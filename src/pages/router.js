import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './index'

const RouterApp = () => (
    <Router>
        <Route to={'/'} exac component={Home} />
    </Router>
)

export default RouterApp