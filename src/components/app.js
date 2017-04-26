import '../styles/main.scss';
import React, {Component} from 'react';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-3 mb-3">
          <div className="col-lg-12">
            <h1 className="text-center">React-Redux Blog</h1>
          </div>
        </div>

        {routes}
      </div>
    );
  }
}

export default App;
