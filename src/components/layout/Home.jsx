import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Zones from '../containers/Zones';
import Comments from '../containers/Comments';
import SpotifyHome from '../containers/SpotifyHome';

import styles from './styles';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Switch>
          <Route exact path='/' component={SpotifyHome}/>
          <Route path='/zones' component={Zones}/>
          <Route path='/comments' component={Comments}/>
        </Switch>
      </div>
    );
  }
}

export default Home;