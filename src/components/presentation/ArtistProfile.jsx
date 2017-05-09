import React, {Component} from 'react';

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

    let formattedFollowers = artist
      .followers
      .total
      .toLocaleString('en-US', {minimumFractionDigits: 0});
    // artist = this.props.searchArtist !== null ? Object.assign({},
    // this.props.searchArtist) : artist; const artistImage = artist.images !== null
    // ? <img src={artist.images[0].url} alt="artistPic"/> : <img src='#'
    // alt="artistPic" /> let artist = Object.assign({}, this.props.searchArtist);
    return (
      <div>
        <div className='va-mid'>
          <img
            className="br-100 fl ba h5 w5 dib mh2"
            src={artist.images[0].url}
            alt="artistPic"/>
          <div className='f2 white fl mt5 ph2 sans-serif'>
            <p>{artist.name}</p>
            <p className='f4' >{`${formattedFollowers} followers`}</p>
            <p className='f4'>
              {artist
                .genres
                .map((genre, i) => {
                  genre = genre !== artist.genres[artist.genres.length - 1]
                    ? `${genre}, `
                    : ` & ${genre}`;
                  return (
                    <span key={i}>{genre}</span>
                  );
                })}
            </p>
          </div>

        </div>

      </div>
    );
  }
}

export default ArtistProfile;