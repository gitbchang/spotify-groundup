import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Main, Zones, Comments } from '../containers/';
import { SpotifyHome, SpotifyFooter } from '../presentation/';

import styles from './styles';

class Home extends Component {
  render() {
    return (
      <div className='bg-black-80'>
        <SpotifyHome />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/zones' component={Zones}/>
          <Route path='/comments' component={Comments}/>
        </Switch>
        <SpotifyFooter />
      </div>
    );
  }
}

export default Home;