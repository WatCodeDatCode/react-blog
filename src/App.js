import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NewBlog from './pages/NewBlog'
import EditBlog from './pages/EditBlog'

function App() {

    return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact={true} />
                    <Route path='/blog' component={Blogs} exact={true} />
                    <Route path='/blog/new' component={NewBlog} exact={true} />
                    <Route path='/blog/:id' component={Blog} exact={true} />
                    <Route path='/blog/edit/:id' component={EditBlog} exact={true} />
                    <Route path='/contact' component={Contact} exact={true} />
                </Switch>
            </Router>
    )
}

export default App
