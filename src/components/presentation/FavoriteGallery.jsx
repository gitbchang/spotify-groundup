import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';

class FavoriteGallery extends Component {
  render() {
    const tracks = this.props.tracks;
    console.log("fav gallery", tracks);
    return (
      <div className='w-100 flex flex-wrap'>
        {tracks.map((track, k) => {
          return (
            <div
              key={k}
              style={{
              width: 20 + '%'
            }}
              className='cf pa2'>
              <div className='dim' >
                <img src={track.imageUrl} alt="albumArt" className='db outline white-10'/>
                <div className='tc white-70 outline' >
                  {this.props.currentSong.playingUrl === track.preview_url
                    ? <Glyphicon glyph='pause'></Glyphicon>
                    : <Glyphicon glyph='play'></Glyphicon>
                  }
                </div>
              </div>
              <div id={k} className='tc grow white-70 hover-red outline mb3'>
                  <Glyphicon id={k} className='red' glyph='heart'></Glyphicon>
              </div>
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 white truncate w-100">{track.trackName}</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">{
                  track.artistNames.length > 1 ? track
                    .artistNames
                    .map((artist, k) => {
                      return (k === 0
                        ? <div key={k}>{`${artist} feat. `}</div>
                        : <div key={k}>{artist}</div>)
                    }) : <div>{track.artistNames[0]}</div>                  
                  }</dd>
              </dl>
            </div>
          )
        })}
      </div>
    );
  }
}

export default FavoriteGallery;