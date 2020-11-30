import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' />
                    <Route exact path='/blog' component={Blogs} />
                    <Route exact path='/blog/:id' component={Blog} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Router>
        </>
    )
}

export default App
