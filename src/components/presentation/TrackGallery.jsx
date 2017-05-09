import React, {Component} from 'react';

import {Glyphicon} from 'react-bootstrap';

class TrackGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingUrl: '',
      audio: null,
      playing: false
    }
  }

  playAudio = (previewUrl) => {
    let audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({playing: true, playingUrl: previewUrl, audio: audio});
    } else {
      if (this.state.playingUrl === previewUrl) {
        this
          .state
          .audio
          .pause();
        this.setState({playing: false})
      } else {
        this
          .state
          .audio
          .pause();
        audio.play();
        this.setState({playing: true, playingUrl: previewUrl, audio: audio})
      }
    }
  }

  render() {
    const tracks = this.props.tracks;
    return (
      <div className='w-100 flex flex-wrap'>
        {tracks.map((track, k) => {
          const trackImg = track.album.images[0].url;
          console.log('track', track);
          return (
            <div key={k} style={{width: 20+'%'}}  className='dim cf pa2' >
              <img src={trackImg} alt="albumArt" className='db outline black-10'  />
            </div>
          )
        })}
      </div>
    );
  }
}

export default TrackGallery;