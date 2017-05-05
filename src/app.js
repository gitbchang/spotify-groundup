import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './components/layout/Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>

          <Home />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, 
document.getElementById('root'));