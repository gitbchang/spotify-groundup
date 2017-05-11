import React, {Component} from 'react';
import {FavoriteGallery} from '../presentation/';
import {APIManager} from '../../utils/';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favTracks: [],
      trackPlayer: {
        playingUrl: '',
        audio: null,
        playing: false
      }
    }
  }

  componentDidMount() {
    APIManager.get('api/track', null, (err, response) => {
      if (err) {
        console.log("error", err.message);
        return;
      }
      this.setState({favTracks: response.results});
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
      // {playing: true, playingUrl: previewUrl, audio: audio}
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
        {this.state.favTracks.length > 0
          ? <FavoriteGallery
              tracks={this.state.favTracks}
              play={this.playAudio}
              currentSong={this.state.trackPlayer}/>
          : <div></div>}
      </div>
    );
  }
}

export default Favorites;