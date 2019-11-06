import React, {Fragment} from 'react';
import './assets/sass/main.scss';
import Header from './layouts/header';
import Home from './pages/home';
function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
    </Fragment>
  );
}

export default App;
