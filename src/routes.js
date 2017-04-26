import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import PageNotfound from './components/page_not_found';

export default
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About} />
    <Route path='/404' component={PageNotfound} />
    <Redirect from='*' to='/404' />
  </Switch>;
