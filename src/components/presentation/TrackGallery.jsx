import React, {Component} from 'react';
import styles from './styles';
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
            <div
              key={k}
              style={{
              width: 20 + '%'
            }}
              className='cf pa2'>
              <div className='dim' onClick={() => this.playAudio(track.preview_url)} >
                <img src={trackImg} alt="albumArt" className='db outline white-10'/>
                <div className='tc white-70 outline mb3' >
                  {this.state.playingUrl === track.preview_url
                    ? <Glyphicon glyph='pause'></Glyphicon>
                    : <Glyphicon glyph='play'></Glyphicon>
                  }
                </div>
              </div>
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 white truncate w-100">{track.name}</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">{
                  track.artists.length > 1 ? track
                    .artists
                    .map((artist, k) => {
                      return (k === 0
                        ? <div key={k}>{`${artist.name} feat. `}</div>
                        : <div key={k}>{artist.name}</div>)
                    }) : <div>{track.artists[0].name}</div>                  
                  }</dd>
              </dl>
            </div>
          )
        })}
      </div>
    );
  }
}

export default TrackGallery;