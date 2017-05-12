import React, { Component } from 'react';

class LoginPage extends Component {

  storeUser = () => {
    let params = this.getHashParams();

    let access_token = params.access_token,
      refresh_token = params.refresh_token,
      error = params.error;

    if (access_token) {
      if (error) {
        alert('There was an error during the authentication');
      } else {
        console.log('access', access_token);
        this.setState({spotifyAccessToken: access_token, spotifyRefreshToken: refresh_token});
      }
    }
  }

  getUserProfile = () => {
    let access_token = this.state.spotifyAccessToken;

    axios({
      method:'get',
      url:'https://api.spotify.com/v1/me',
      headers: {'Authorization': 'Bearer ' + access_token},
      responseType:'json'
    })
      .then(function(response) {
        console.log('login response', response);
    });
  }

  getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window
        .location
        .hash
        .substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;

  }
  
  render() {
    return (
      <div className="min-vh-100 dt w-100 bg-dark-pink">
          <div className="dtc v-mid tc white ph3 ph4-l">
            <h1 className="f6 f2-m f-subheadline-l fw6 tc">Log In for Stats!</h1>
            <img src="/images/log_in.svg" className="dib mw6 br4" alt="Login Button" />
          </div>
      </div>
    );
  }
}

export default LoginPage;