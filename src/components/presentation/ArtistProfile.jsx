import React, { Component } from 'react';

class ArtistProfile extends Component {
  render() {
    let artist = {
      name: '',
      followers: {
        total: ''
      },
      images: [
        {
          url: ''
        }
      ],
      genres: []
    };
    artist = this.props.searchArtist !== null
      ? this.props.searchArtist
      : artist;
    
    let formattedFollowers = artist.followers.total.toLocaleString('en-US', {minimumFractionDigits: 0});
    // artist = this.props.searchArtist !== null ? Object.assign({}, this.props.searchArtist) : artist;
    // const artistImage = artist.images !== null ? <img src={artist.images[0].url} alt="artistPic"/> : <img src='#' alt="artistPic" />
    // let artist = Object.assign({}, this.props.searchArtist);
    return (
      <div>
        <div className='fl w-25' ><img className="br-100 ba h5 w5 dib mh2" src={artist.images[0].url} alt="artistPic"/></div>
        <div className='f2 white fl w-75 mt5 ph2 sans-serif' >{artist.name}</div>
        <div className='f3 white fl w-75 mt1 ph2' >{formattedFollowers} followers</div>
        <div className='f3 white mt1 ph2'>
          {artist.genres.map((genre, i) => {
            genre = genre !== artist.genres[artist.genres.length - 1]
                  ? `${genre}, `
                  : ` & ${genre}`;
                return (
                  <span key={i}>{genre}</span>
                );
          })}
        </div>
      </div>
    );
  }
}

export default ArtistProfile;