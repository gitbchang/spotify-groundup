import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Main, DataVisualization, Favorites, LoginPage } from '../containers/';
import { SpotifyHome, SpotifyFooter, About } from '../presentation/';

// import styles from './styles';
// xxx - revert to login screen if user is not logged in
class Home extends Component {  
  render() {
    return (
      <div className='min-vh-100 bg-black-80'>
        <SpotifyHome />
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/login' component={LoginPage}/>
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