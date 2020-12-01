import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NewBlog from './pages/NewBlog'

function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact={true} />
                    <Route path='/blog' component={Blogs} />
                    <Route path='/blog/:id' component={Blog} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/new' component={NewBlog} />
                </Switch>
            </Router>
        </>
    )
}

export default App
