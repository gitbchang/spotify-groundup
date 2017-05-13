import React, { Component } from 'react';

class DataVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyAccessToken: localStorage.getItem('spotifyAccessToken'),
      spotifyRefreshToken: localStorage.getItem('spotifyRefreshToken')
    }
  }
  

  getSongStats = () => {
    let access_token = localStorage.getItem('spotifyAccessToken');

    axios({
      method:'get',
      url:'https://api.spotify.com/v1/me/top/tracks?limit=10',
      headers: {'Authorization': 'Bearer ' + access_token},
      responseType:'json'
    })
      .then(function(response) {
        
    });

  }

  render() {
    return (
      <div className='min-vh-100 pa5 ph7-l hot-pink'>
        Data Visualization!
      </div>
    );
  }
}

export default DataVisualization;