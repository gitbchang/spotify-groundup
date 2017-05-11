import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import { APIManager } from '../../utils/';

class TrackGallery extends Component {

  songAudio = (previewUrl) => {
    this.props.play(previewUrl);
  }

  saveTrack = (e) => {    
    let tracks = this.props.tracks;
    let savedTrack = tracks[e.target.id];
    let artistArr = [];
    savedTrack.artists.forEach((artist) => {
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
        if(err) {
          console.log("error", err.message);
          return;
        }
        console.log('TRACK SAVED', JSON.stringify(response));

      });


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
              <div className='dim' onClick={() => this.songAudio(track.preview_url)} >
                <img src={trackImg} alt="albumArt" className='db outline white-10'/>
                <div className='tc white-70 outline' >
                  {this.props.currentSong.playingUrl === track.preview_url
                    ? <Glyphicon glyph='pause'></Glyphicon>
                    : <Glyphicon glyph='play'></Glyphicon>
                  }
                </div>
              </div>
              <div id={k} className='tc grow white-70 hover-red outline mb3' onClick={(e) => this.saveTrack(e)} >
                  <Glyphicon id={k} glyph='heart'></Glyphicon>
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