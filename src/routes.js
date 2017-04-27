import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import PostsShow from './containers/posts_show';
import PageNotfound from './components/page_not_found';

export default
  <Switch>
    <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={PostsShow} />
    <Route path='/404' component={PageNotfound} />
    <Route exact path="/" component={PostsIndex} />
    <Redirect from='*' to='/404' />
  </Switch>;
