import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './assets/sass/main.scss';
import Header from './layouts/header';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Fragment>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
