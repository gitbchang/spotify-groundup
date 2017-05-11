import React, { Component } from 'react';

class FavoriteGallery extends Component {
  render() {
    const tracks = this.props.tracks;
    return (
      <div>
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
              <div id={k} className='tc grow white-70 hover-red outline mb3' onClick={(e) => this.saveTrack(e.target.id)} >
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
      </div>
    );
  }
}

export default FavoriteGallery;