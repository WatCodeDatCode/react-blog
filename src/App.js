import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NewBlog from './pages/NewBlog'
import EditBlog from './pages/EditBlog'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <Router>
            <Navbar />
            <Fragment>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact={true} />
                        <Route path="/blog" component={Blogs} exact={true} />
                        <Route
                            path="/blog/new"
                            component={NewBlog}
                            exact={true}
                        />
                        <Route path="/blog/:id" component={Blog} exact={true} />
                        <Route
                            path="/blog/edit/:id"
                            component={EditBlog}
                            exact={true}
                        />
                        <Route
                            path="/contact"
                            component={Contact}
                            exact={true}
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </ScrollToTop>
            </Fragment>
            <Footer />
        </Router>
    )
}

export default App
