import React, {Component} from 'react';

import { SpotifySearchInput, ArtistProfile, TrackGallery } from '../presentation/';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      tracks: []
    }
  }

  searchSpotify = (query) => {
    const BASE_URL = 'https://api.spotify.com/v1/search';
    let FETCH_URL = `${BASE_URL}?q=${query}&type=artist&limit=1`;
    const ALBUM_URL = `https://api.spotify.com/v1/artists/`;
    const self = this;
    console.log("FROM THE MAIN", query);
    // First we query for the artist to get the artist id
    axios({method: 'get', url: FETCH_URL, responseType: 'json'}).then(function (response) {
      console.log('response', response);
      const artist = response.data.artists.items[0];
      self.setState({artist: artist});
    }).then(() => {
      // Use the artist ID to get their top tracks
      FETCH_URL = FETCH_URL = `${ALBUM_URL}${self.state.artist.id}/top-tracks?country=US&`;
      axios({method: 'get', url: FETCH_URL, responseType: 'json'}).then(function (response) {
        console.log('artist top tracks', response);
        self.setState({tracks: response.data.tracks, test: true});
      });
    });
  }

  render() {
    return (
      <div className='vh-75 pa5 ph7-l'>
        <SpotifySearchInput theSearch={this.searchSpotify}/>        
        {this.state.artist !== null
          ? <div>
              <ArtistProfile searchArtist={this.state.artist}/>
              <TrackGallery tracks={this.state.tracks} />
            </div>
          : <div></div>
        }
      </div>
    );
  }
}

export default Main;