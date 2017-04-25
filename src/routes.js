import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

export default
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
  </Switch>;
