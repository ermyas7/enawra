import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PostsState from './context/posts/PostsState';
import './assets/sass/main.scss';
import Header from './layouts/header';
import Home from './pages/home';
import Blogs from './pages/blogs';
import About from './pages/about';
import Auth from './pages/auth';

function App() {
  return (
    <PostsState>
      <Router>
        <Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/blogs" component={Blogs}/>
          <Route exact path="/auth" component={Auth}/>
        </Switch>
      </Fragment>
      </Router>
    </PostsState>  
  );
}

export default App;
