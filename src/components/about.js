import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

const Greeting = () => <div>Hello there!</div>;
const Greeting2 = () => <div>Hello there 222!</div>;

const About = () =>
  <div>
    <Route path="/about/greet" component={Greeting} />
    <h2>About page!</h2>

    <Switch>
      <Route path="/about/greet" component={Greeting} />
      <Route path="/about/greet2" component={Greeting2} />
      <Redirect from='/about/*' to='/404' />
    </Switch>
  </div>;

export default About;
