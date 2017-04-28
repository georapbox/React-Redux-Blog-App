import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import rootReducer from './reducers';
import * as pkg from '../package.json';

const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: pkg.name,
    actionsBlacklist: []
  })
  : compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));
const store = createStore(rootReducer, enhancer);

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('js_root')
);
