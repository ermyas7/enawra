import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './assets/sass/main.scss';
import Header from './layouts/header';
import HeaderSecondary from './layouts/navsecondary';
import Home from './pages/home';
import Blogs from './pages/blogs';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Fragment>
      <Header/>
      <HeaderSecondary/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blogs" component={Blogs}/>
      </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
