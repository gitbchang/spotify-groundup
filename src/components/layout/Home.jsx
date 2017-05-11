import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Main, Zones, Comments, DataVisualization, Favorites } from '../containers/';
import { SpotifyHome, SpotifyFooter, About } from '../presentation/';

import styles from './styles';

class Home extends Component {
  render() {
    return (
      <div className='bg-black-80'>
        <SpotifyHome />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/datavisual' component={DataVisualization}/>
          <Route path='/favorites' component={Favorites}/>
          <Route path='/About' component={About}/>
        </Switch>
        <SpotifyFooter />
      </div>
    );
  }
}

export default Home;