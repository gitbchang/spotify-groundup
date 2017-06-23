import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Home from './components/layout/Home';

// redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// redux store
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promise))(createStore);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, 
document.getElementById('root'));