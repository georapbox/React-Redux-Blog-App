import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import PageNotfound from './components/page_not_found';

export default
  <Switch>
    <Route path="/posts/new" component={PostsNew} />
    <Route path='/404' component={PageNotfound} />
    <Route exact path="/" component={PostsIndex} />
    <Redirect from='*' to='/404' />
  </Switch>;
