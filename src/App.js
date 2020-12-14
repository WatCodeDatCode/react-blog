import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  Blogs,
  Blog,
  Contact,
  NewBlog,
  EditBlog,
  PageNotFound
} from './pageExports.js';
import {
  Navbar,
  Footer,
  ScrollToTop,
  AuthContext
} from './componentExports.js';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setToken(localStorage.getItem('token'));
  };

  const getTokenStatus = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  useEffect(() => {
    getTokenStatus();
  }, []);

  return (
    <Router>
      <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
        <Navbar />
        <Fragment>
          <ScrollToTop>
            <Switch>
              <Route path='/' component={Home} exact={true} />
              <Route path='/blog' component={Blogs} exact={true} />
              <Route path='/blog/new' component={NewBlog} exact={true} />
              <Route path='/blog/:id' component={Blog} exact={true} />
              <Route path='/blog/edit/:id' component={EditBlog} exact={true} />
              <Route path='/contact' component={Contact} exact={true} />
              <Route component={PageNotFound} />
            </Switch>
          </ScrollToTop>
        </Fragment>
        <Footer />
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
