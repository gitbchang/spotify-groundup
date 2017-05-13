import React, { Component } from 'react';
import axios from 'axios';
import { DataWelcome } from '../presentation';

class DataVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyAccessToken: localStorage.getItem('spotifyAccessToken'),
      spotifyRefreshToken: localStorage.getItem('spotifyRefreshToken'),
      topTracks: []
    }
  }
  
  componentDidMount() {
    this.getTopTracks();
  }
  
  
  getTopTracks = () => {
    const self = this;
    let access_token = localStorage.getItem('spotifyAccessToken');

    axios({
      method:'get',
      url:'https://api.spotify.com/v1/me/top/tracks?limit=10',
      headers: {'Authorization': 'Bearer ' + access_token},
      responseType:'json'
    })
      .then(function(response) {
        console.log(response.data.items);
        let trackArray = response.data.items;
        let currentTrackState = Object.assign([], self.state.topTracks);

        trackArray.map((track, i) => {
          let trackObj = {
            trackName: track.name,
            artistNames: track.artists.map((artist) => {
              return artist.name
            }),
            spotifyTrackId: track.id
          }
          currentTrackState.push(trackObj);
        })

        self.setState({
          topTracks: currentTrackState
        });
        
    });
  }

  getTopTrackIds = (array) => {
    let trackIds = [];
    
     array.map((track) => {
      trackIds.push(track.spotifyTrackId)
    });
    return trackIds;
  }

  getAudioFeatures = () => {
   let trackIds = this.getTopTrackIds(this.state.topTracks);
  //  trackIds.toString();
  // https://api.spotify.com/v1/audio-features?ids=
  //  console.log('string track id', trackIds.toString());
   const self = this;
    axios({
      method:'get',
      url:'https://api.spotify.com/v1/audio-features?ids=' + trackIds.toString(),
      headers: {'Authorization': 'Bearer ' + this.state.spotifyAccessToken},
      responseType:'json'
    })
      .then(function(response) {
        console.log("track audio features", response.data.audio_features);
        let audioFeaturesArray = response.data.audio_features;
        // add each audio feature to the track object in state
        let currentTrackState = Object.assign([], self.state.topTracks);
        console.log("current track state", currentTrackState);
        for(var i = 0; i < currentTrackState.length; i++){
          currentTrackState[i].acousticness = audioFeaturesArray[i].acousticness;
          currentTrackState[i].danceability = audioFeaturesArray[i].danceability;
          currentTrackState[i].instrumentalness = audioFeaturesArray[i].instrumentalness;
          currentTrackState[i].liveness = audioFeaturesArray[i].liveness;
          currentTrackState[i].loudness = audioFeaturesArray[i].loudness;
          currentTrackState[i].energy = audioFeaturesArray[i].energy;
          currentTrackState[i].tempo = audioFeaturesArray[i].tempo;
          currentTrackState[i].valence = audioFeaturesArray[i].valence;

        }

    });
  }

  render() {
    return (
      <div className='min-vh-100 pa5 ph7-l'>
        <a 
        className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib white hover-hot-pink pointer" 
        onClick={this.getAudioFeatures}
        >Get Audio Features</a>
      </div>
    );
  }
}

export default DataVisualization;