import React, {Component} from 'react';
import { FavoriteGallery } from '../presentation/';
import {APIManager} from '../../utils/';
import axios from 'axios'

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favTracks: []
    }
  }

  
  componentWillMount() {
    APIManager.get('api/track', null, (err, response) => {
      if(err) {
        console.log("error", err.message);
        return;
      }
      console.log("track get response", response);
      // this.setState({favTracks: response.results});      
    });    

    // axios({method: 'get', url: 'api/track', params: {}, responseType: 'json'})
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {

    //   });
  }
  

  render() {
    return (
      <div className='min-vh-100 pa5 ph7-l'>
        <FavoriteGallery tracks={this.state.favTracks} />
      </div>
    );
  }
}

export default Favorites;