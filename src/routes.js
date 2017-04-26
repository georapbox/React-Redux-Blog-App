import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PostsIndex from './components/posts_index';
import PageNotfound from './components/page_not_found';

export default
  <Switch>
    <Route exact path="/" component={PostsIndex}/>
    <Route path='/404' component={PageNotfound} />
    <Redirect from='*' to='/404' />
  </Switch>;
