import React, {Component} from 'react';

import {SpotifySearchInput, ArtistProfile, TrackGallery} from '../presentation/';
import {APIManager} from '../../utils/';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      tracks: [],
      trackPlayer: {
        playingUrl: '',
        audio: null,
        playing: false
      },
      spotifyAccessToken: '',
      spotifyRefreshToken: ''
    }
  }

  componentWillMount() {
    this.storeUser();
  }

  componentDidMount() {
    this.getUserProfile();
  }

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
        localStorage.setItem('spotifyAccessToken', access_token);
        localStorage.setItem('spotifyRefreshToken', refresh_token);
      }
    }
  }

  getUserProfile = () => {
    let access_token = localStorage.getItem('spotifyAccessToken');
    if (access_token) {
      axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/me',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
          responseType: 'json'
        })
        .then(function (response) {
          const userProfile = {
            displayName: response.data.display_name,
            email: response.data.email,
            imageUrl: response.data.images[0].url,
            product: response.data.product
          };
          localStorage.setItem('spotifyUserProfile', userProfile);
          console.log('login response', userProfile);
        });
    }

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

  saveTracks = (iTrack) => {
    let tracks = this.state.tracks;
    let savedTrack = tracks[iTrack];
    let artistArr = [];
    savedTrack
      .artists
      .forEach((artist) => {
        artistArr.push(artist.name);
      })

    let trackObject = {
      trackName: savedTrack.name,
      artistNames: artistArr,
      trackId: savedTrack.id,
      imageUrl: savedTrack.album.images[0].url,
      trackPreviewUrl: savedTrack.preview_url
    }
    console.log(trackObject);
    APIManager.post('api/track', trackObject, (err, response) => {
      if (err) {
        console.log("error", err.message);
        return;
      }
      console.log('TRACK SAVED', JSON.stringify(response));

    });
  }

  searchSpotify = (query) => {
    const BASE_URL = 'https://api.spotify.com/v1/search';
    let FETCH_URL = `${BASE_URL}?q=${query}&type=artist&limit=1`;
    /// xxx - store access token in the redux store
    let access_token = localStorage.getItem('spotifyAccessToken');
    const ALBUM_URL = `https://api.spotify.com/v1/artists/`;
    const self = this;
    console.log("FROM THE MAIN", query);
    // First we query for the artist to get the artist id
    axios({
      method: 'get',
      url: FETCH_URL,
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
        responseType: 'json'
      })
      .then(function (response) {
        console.log('response', response);
        const artist = response.data.artists.items[0];
        self.setState({artist: artist});
      })
      .then(() => {
        // Use the artist ID to get their top tracks
        FETCH_URL = FETCH_URL = `${ALBUM_URL}${self.state.artist.id}/top-tracks?country=US&`;
        axios({
          method: 'get',
          url: FETCH_URL,
          headers: {
            'Authorization': 'Bearer ' + access_token
          },
            responseType: 'json'
          })
          .then(function (response) {
            console.log('artist top tracks', response);
            self.setState({tracks: response.data.tracks, test: true});
          });
      });
  }

  playAudio = (previewUrl) => {
    let audio = new Audio(previewUrl);
    if (!this.state.trackPlayer.playing) {
      audio.play();
      this.setState({
        trackPlayer: {
          playing: true,
          playingUrl: previewUrl,
          audio: audio
        }
      });
    } else {
      if (this.state.trackPlayer.playingUrl === previewUrl) {
        this
          .state
          .trackPlayer
          .audio
          .pause();
        this.setState({
          trackPlayer: {
            playing: false
          }
        })
      } else {
        this
          .state
          .trackPlayer
          .audio
          .pause();
        audio.play();
        this.setState({playing: true, playingUrl: previewUrl, audio: audio})
      }
    }
  }

  render() {
    return (
      <div className='min-vh-100 pa5 ph7-l'>
        <SpotifySearchInput theSearch={this.searchSpotify}/> {this.state.artist !== null
          ? <div>
              <ArtistProfile searchArtist={this.state.artist}/>
              <TrackGallery
                tracks={this.state.tracks}
                fav={this.saveTracks}
                play={this.playAudio}
                currentSong={this.state.trackPlayer}/>
            </div>
          : <div></div>
}
      </div>
    );
  }
}

export default Main;